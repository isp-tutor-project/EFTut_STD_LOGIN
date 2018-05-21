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
const fileList = [
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
];
const filePath = "scripts/RQMod_0.0.1";
function synthesizeSsmlFile(fileList) {
    const textToSpeech = require('@google-cloud/text-to-speech');
    const fs = require('fs');
    const client = new textToSpeech.TextToSpeechClient();
    let outputFile;
    for (let file of fileList) {
        let input = JSON.parse(fs.readFileSync(filePath + file));
        for (let request of input.request) {
            for (let utterance of input.utterance) {
                let nameParts = utterance[0].split('_');
                let name = nameParts[0] + "_" + request.voice.ssmlGender + "_" + nameParts[1];
                outputFile = filePath + "_generated/" + name;
                request.input.ssml = utterance[1];
                console.log(`Audio content  : ${request.input.ssml}`);
                console.log(`Written to file: ${outputFile}`);
                client.synthesizeSpeech(request, (err, response) => {
                    if (err) {
                        console.error('ERROR:', err);
                        return;
                    }
                    fs.writeFile(outputFile, response.audioContent, 'binary', (err) => {
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
//# sourceMappingURL=processor.js.map