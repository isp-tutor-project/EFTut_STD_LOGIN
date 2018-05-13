

namespace EFTut_Suppl {

   
    export class SSoundCheck {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
	
        public onCreate() {

        }

        public preenter() {

        }

        public demoinit() {

        }

        public logging() {

        }

        public rewind() {

        }
        
        public SButton1_Action() {
            console.log("Test Action Complete");
        }

    }
}