import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="nav_bar">
            <ul className="nav_main">
                <li><Link to="/">useState (TypeScript)</Link></li>
                <li><Link to="/useEffect">useEffect</Link></li>
                <li><Link to="/useLayoutEffect">useLayoutEffect + useRef</Link></li>
                <li><Link to="/useMemo">useMemo</Link></li>
                <li><Link to="/useCallback">useCallback</Link></li>
                <li><Link to="/useDebugValue">useDebugValue</Link></li>
                <li><Link to="/useReducer">useReducer</Link></li>
                <li><Link to="/useContext">useContext</Link></li>
            </ul>

            <p>Кастомные хуки</p>
            <ul className="nav_main">
                <li><Link to="/useLocalStorage">useLocalStorage</Link></li>
                <li><Link to="/useOutside">useOutside</Link></li>
                <li><Link to="/useWindowSize">useWindowSize</Link></li>
                <li><Link to="/useElementSize">useElementSize</Link></li>
                <li><Link to="/useHover">useHover</Link></li>
                <li><Link to="/usePrevious">usePrevious</Link></li>
                <li><Link to="/useOnScreen">useOnScreen</Link></li>
                <li><Link to="/useAnimation">useAnimation</Link></li>
                <li><Link to="/useDebounce">useDebounce</Link></li>
                <li><Link to="/useThrottle">useThrottle</Link></li>
                <li><Link to="/useKeyPress">useKeyPress</Link></li>
                <li><Link to="/useScript">useScript</Link></li>
                <li><Link to="/useAsync">useAsync</Link></li>
                <li><Link to="/useIntersectionObserver">useIntersectionObserver</Link></li>
                <li><Link to="/useSsr">useSsr</Link></li>
                <li><Link to="/useInput">useInput</Link></li>
                <li><Link to="/useCookie">useCookie</Link></li>
                <li><Link to="/useFetch">useFetch</Link></li>

            </ul>
        </div>
    );
}

export default Navigation;
