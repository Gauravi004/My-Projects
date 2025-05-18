import speech_recognition as sr
import webbrowser
import pyttsx3
import musicLibrary 
import requests
import google.generativeai as genai
from gtts import gTTS
import pygame
import os
recognizer = sr.Recognizer()
engine = pyttsx3.init()

def ol_speak(text):
    engine.say(text)
    engine.runAndWait()

def speak(text):
  tts  = gTTS(text=text, lang='en')
  tts.save("audio.mp3")
  pygame.mixer.init()
  pygame.mixer.music.load("audio.mp3")
  pygame.mixer.music.play()
  while pygame.mixer.music.get_busy():
        pygame.time.Clock().tick(10)
  pygame.init()             
  pygame.mixer.init()        
  pygame.mixer.music.unload()
  os.remove("audio.mp3")
def processText(text):
    text = text.lower()
    if( "youtube" in text ):
        speak("Opening YouTube")
        webbrowser.open("https://www.youtube.com")

    elif( "github" in text):
        speak("Opening GitHub")
        webbrowser.open("https://github.com")

    elif( "facebook" in text):
        speak("Opening Facebook")
        webbrowser.open("https://www.facebook.com")

    elif( "twitter" in text):
        speak("Opening Twitter")
        webbrowser.open("https://twitter.com")

    elif( "instagram" in text ):
        speak("Opening Instagram")
        webbrowser.open("https://www.instagram.com")

    elif( "linkedIn" in text ):
        speak("Opening LinkedIn")
        webbrowser.open("https://www.linkedin.com")

    elif( "whatsApp" in text ):
        speak("Opening WhatsApp")
        webbrowser.open("https://web.whatsapp.com")

    elif("gmail" in text ):
        speak("Opening Gmail")
        webbrowser.open("https://mail.google.com/mail/u/0/#inbox")
        
    elif( "google" in text ):
        speak("Opening Google")
        webbrowser.open("https://www.google.com")

    
    elif( text.startswith("play") ):
       song = text.split(" ")[1]
       link = musicLibrary.music[song]
       webbrowser.open(link)
       speak("Playing " + song)
    
    elif( "news" in text ):
      r = requests.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6376c2c9190f4415835f92c5058e1658")
      news = r.json()
      articles = news['articles']
      for article in articles:
            title = article['title']
            description = article['description']
            url = article['url']
            speak("Title: " + title)
            speak("Description: " + description)
            speak("Read more at: " + url)
            break
    
    elif("bye" in text or "exit" in text or "stop" in text):
        speak("bye bye!, take care!")
        exit()
    else:
        try:
            genai.configure(api_key="AIzaSyAnt5L_###########################")  
            model = genai.GenerativeModel("gemini-1.5-flash")
            response = model.generate_content(text)
            speak(response.text.strip())
        except Exception as e:
            speak("Sorry, there was an issue with generating a response.")
            print(f"Error: {e}")
if __name__ == "__main__":
    speak("Initializing...")

    while True:
      r = sr.Recognizer()
      try:
        with sr.Microphone() as source:
         print("Say something!")
         audio = r.listen(source, timeout=3, phrase_time_limit=5)
     
        text = r.recognize_google(audio)
        print("You said: {}".format(text))
       
        if(text.lower()=="mumma" or text.lower()=="mamma" or text.lower()=="mama"):
            speak("Yes, how can I help you?")
            with sr.Microphone() as source:
             print("Say something!")
             audio = r.listen(source)
             text = r.recognize_google(audio)
        processText(text)
        if("exit" in text or "stop" in text):
            speak("bye bye take care")
            break
      except Exception as e:
        print("Listening...: {}".format(e))
        