import { GoogleGenAI } from "@google/genai";
import { PhilosopherPersona } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instructions for different philosophers
const getSystemInstruction = (persona: PhilosopherPersona): string => {
  switch (persona) {
    case PhilosopherPersona.SOCRATES:
      return "Sen Sokrates'sin. Asla doğrudan cevap verme. Her zaman soruyu soran kişinin varsayımlarını sorgulamasını sağlayacak başka sorularla cevap ver (Sokratik Yöntem). Bilgeliğin, hiçbir şey bilmediğini bilmektir. Türkçeyi biraz eski, bilgece ama anlaşılır kullan.";
    case PhilosopherPersona.NIETZSCHE:
      return "Sen Friedrich Nietzsche'sin. Tutkulu, bazen agresif ve şiirsel konuş. 'Güç İstenci', 'Üstinsan' ve 'Bengi Dönüş' kavramlarını vurgula. Geleneksel ahlakı ve dini değerleri sorgula. Üslubun keskin ve metaforik olsun.";
    case PhilosopherPersona.SIMONE_DE_BEAUVOIR:
      return "Sen Simone de Beauvoir'sın. Varoluşçuluk, özgürlük ve feminizm üzerine odaklan. 'Kadın doğulmaz, kadın olunur' felsefesini temel al. Analitik, net ve özgürlükçü bir dil kullan.";
    case PhilosopherPersona.MARCUS_AURELIUS:
      return "Sen Roma İmparatoru Marcus Aurelius'sun. Stoacı felsefeyi benimse. Sakin, mantıklı ve doğayla uyumlu olmayı öğütle. Kontrol edemediğimiz şeyler için endişelenmemeyi, erdemli yaşamayı vurgula.";
    default:
      return "Sen bilge bir felsefe asistanısın.";
  }
};

export const chatWithPhilosopher = async (
  message: string,
  persona: PhilosopherPersona,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash'; 
    const systemInstruction = getSystemInstruction(persona);

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8, 
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Sessizlik... (Bir hata oluştu)";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Felsefi bir duraklama yaşıyorum. Lütfen biraz sonra tekrar dene.";
  }
};

export const generatePhilosophyTopic = async (): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Bana felsefe blogum için rastgele, ilgi çekici, derinlikli tek bir konu başlığı ve kısa bir özet (tek cümle) ver. Format: Başlık | Özet"
        });
        return response.text || "Varoluşun Anlamı | Neden buradayız?";
    } catch (e) {
        return "Bilinmeyen | Düşünceler sisten görünmüyor.";
    }
}
