

namespace EFTut_Suppl {

    export class Scene1 {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
	
        public $oncreate() {
            this["SPurpleCircle"].xname = "SPurpleCircle";
        }

        public $preenter() {
            this.connectNavButton(CONST.NEXTSCENE, "SPurpleCircle");
            this.connectGraph("graphname");
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

    export class Scene2 {

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