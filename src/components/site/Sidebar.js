import React from "react";
import {Route, Link, Switch,} from 'react-router-dom';
import {Button} from 'reactstrap'
import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from "../concepts/FunctionalComponentDemo";
import JSXRules from "../concepts/JSXRules";
import State from "../concepts/State";
import Effects from "../concepts/Effects";
import PropsDemo from "../concepts/PropsDemo";


//import Pen from "./Codepen";


const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                
                <li><Link to="/"><Button>Home</Button></Link></li>
                <li><Link to="/functionalcomponent"><Button>Functional Component</Button></Link></li>
                <li><Link to="/jsxrules"><Button>JSX Rules</Button></Link></li>
                <li><Link to="/state"><Button>useState</Button></Link></li>
                <li><Link to="/effects"><Button>useEffect</Button></Link></li>
                <li><Link to="/propsdemo"><Button>PropsDemo</Button></Link></li>
                <li><Link to="/codepen"><Button>Codepen (not working)</Button></Link></li>
                <li><Link to="/resources"><Button>Resources</Button></Link></li>

                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route exact path="/state"><State /></Route>
                <Route exact path="/effects"><Effects /></Route>
                <Route exact path="/propsdemo"><PropsDemo /></Route>

                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                {/**<Route exact path="/codepen"><Pen /></Route>*/}


                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;