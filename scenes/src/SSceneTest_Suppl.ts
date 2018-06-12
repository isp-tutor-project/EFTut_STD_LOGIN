

namespace EFTut_Suppl {

    export class Scene1 {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
	
        public $oncreate() {
            this["SPurpleCircle"].xname = "SPurpleCircle";
            this["SInput"].xname = "SInput";
            this["SRect1"].xname = "SRect1";
        }

        public $onenter() {
            this["SInput"].setFocus(true);
            this["SInput"].setEnabled(true);
        }
        
        public $preenter() {
            this.connectNavButton(CONST.NEXTSCENE, "SPurpleCircle");
            this.connectGraph("graphname");
        }

        public $preexit() {
            this["SInput"].setFocus(false);
            this["SInput"].setEnabled(false);
        }

        public $demoinit() {

        }

        public $logging() {

        }

        public $rewind() {

        }
    }

    export class Scene2 {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
	
        public $oncreate() {

            this["SPurpleCircle"].xname = "SPurpleCircle";
            this["SInput"].xname = "SInput";
            this["SRect1"].xname = "SRect1";
        }

        public $preenter() {
            this.connectNavButton(CONST.NEXTSCENE, "SPurpleCircle");
        }

        public $preexit() {
        }

        public $demoinit() {

        }

        public $logging() {

        }

        public $rewind() {

        }
    }

    export class Scene3 {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
	
        public $oncreate() {

            this["SPurpleCircle"].xname = "SPurpleCircle";
        }

        public $preenter() {
            this.connectNavButton(CONST.NEXTSCENE, "SPurpleCircle");
        }

        public $preexit() {
        }

        public $onexit() {
            this["SPurpleCircle"].enableButton(false);
        }

        public $demoinit() {

        }

        public $logging() {

        }

        public $rewind() {

        }
    }

    export class Scene4 {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
	
        public $oncreate() {

            this["SPurpleCircle"].xname = "SPurpleCircle";
        }

        public $onenter() {
            this["SPurpleCircle"].enableButton(false);
        }

        public $preenter() {
            this["SPurpleCircle"].enableButton(false);
        }

        
        public $preexit() {
        }

        public $demoinit() {

        }

        public $logging() {

        }

        public $rewind() {

        }
    }
    
}