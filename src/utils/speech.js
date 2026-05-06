export function speak(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(String(text))
  utt.lang = 'es-ES'
  utt.rate = 0.82
  utt.pitch = 1.0
  window.speechSynthesis.speak(utt)
}
