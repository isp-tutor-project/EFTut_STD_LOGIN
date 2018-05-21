//*********************************************************************************
//
//  Copyright(c) 2008,2018 Kevin Willows. All Rights Reserved
//
//	License: Proprietary
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//
//*********************************************************************************

'use strict';

interface InputType {
    ssml:string;
    text:string;
}

interface VoiceType {
    name:string;
    languageCode:string;
    ssmlGender:string;
}

interface AudioType {
    audioEncoding:string;
}

interface requestType {
    input:InputType;
    voice:VoiceType;
    audioConfig:AudioType;
}

interface ttsDesc {
    request:Array<requestType>;
    utterance:Array<Array<string>>;
}

const fileList:Array<string> = [
    // "/AlgaeExpScript_choice.json",
    // "/BalloonExpScript_choice.json",
    // "/GreenhouseExpScript_choice.json",
    // "/GreenhouseExpScript_nochoice.json",
    // "/IcemeltingExpScript_choice.json",
    // "/RampsExpScript_choice.json",
    // "/RQMod_Intro_choice.json",
    // "/RQMod_Intro_nochoice.json",
    // "/SinkingExpScript_choice.json",
    "/SodaExpScript_choice.json"
]

const filePath:string = "scripts/RQMod_0.0.1";

function synthesizeSsmlFile(fileList:Array<string>) {

    const textToSpeech = require('@google-cloud/text-to-speech');
    const fs = require('fs');
  
    const client = new textToSpeech.TextToSpeechClient();
  
    let outputFile:string;

    for(let file of fileList) {
        
        let input:ttsDesc = JSON.parse(fs.readFileSync(filePath + file));

        for(let request of input.request) {

            for(let utterance of input.utterance) {

                let nameParts:Array<string> = utterance[0].split('_');
                let name = nameParts[0] + "_" + request.voice.ssmlGender + "_" + nameParts[1];

                outputFile         = filePath + "_generated/" + name;
                request.input.ssml = utterance[1];

                console.log(`Audio content  : ${request.input.ssml}`);
                console.log(`Written to file: ${outputFile}`);

                client.synthesizeSpeech(request, (err:any, response:any) => {
                    if (err) {
                      console.error('ERROR:', err);
                      return;
                    }
                
                    fs.writeFile(outputFile, response.audioContent, 'binary', (err:string) => {
                      if (err) {
                        console.error('ERROR:', err);
                        return;
                      }
                      console.log(`Audio content written to file: ${outputFile}`);
                    });
                });              
            }
        }
    }
}
 

synthesizeSsmlFile(fileList);