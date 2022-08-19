import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Navigation } from "components";
import {
    UseStatePage,
    UseEffectPage,
    UseLayoutEffectPage,
    UseMemoPage,
    UseCallbackPage,
    UseDebugValuePage,
    UseReducerPage,
    UseContextPage,
    ModalPage,
    NotFound,
} from "pages";

import UseLocalStorage from "./hooks/UseLocalStorage";
import UseOutside from "./hooks/UseOutside";
import UseWindowSize from "./hooks/UseWindowSize";
import UseElementSize from "./hooks/UseElementSize";
import UseHover from "./hooks/UseHover";
import UsePrevious from "./hooks/UsePrevious";
import UseOnScreen from "./hooks/UseOnScreen";
import UseAnimation from "./hooks/UseAnimation";
import UseDebounce from "./hooks/UseDebounce";
import UseThrottle from "./hooks/UseThrottle";
import UseKeyPress from "./hooks/UseKeyPress";
import UseScript from "./hooks/UseScript";
import UseEventListener from "./hooks/UseEventListener";
import UseAsync from "./hooks/UseAsync";
import UseIntersectionObserver from "./hooks/UseIntersectionObserver";
import UseSsr from "./hooks/UseSsr";
import UseInput from "./hooks/UseInput";
import UseCookie from "./hooks/UseCookie";
import UseFetch from "./hooks/UseFetch";

// https://usehooks-ts.com/react-hook/use-debounce
// https://github.com/streamich/react-use

function App() {
   
    return (
        <div className="App">
            <Navigation />
            

            <div className="main">
                <Routes>
                    <Route path="/" element={<UseStatePage />} />
                    <Route path="/useEffect" element={<UseEffectPage />} />
                    <Route path="/useLayoutEffect" element={<UseLayoutEffectPage />} />
                    <Route path="/useMemo" element={<UseMemoPage />} />
                    <Route path="/useCallback" element={<UseCallbackPage />} />
                    <Route path="/useDebugValue" element={<UseDebugValuePage />} />
                    <Route path="/useReducer" element={<UseReducerPage />} />
                    <Route path="/useContext" element={<UseContextPage />} />

                    <Route path="/useModal" element={<ModalPage />} />
                    <Route path="/useLocalStorage" element={<UseLocalStorage />} />
                    <Route path="/useOutside" element={<UseOutside />} />
                    <Route path="/useWindowSize" element={<UseWindowSize />} />
                    <Route path="/useElementSize" element={<UseElementSize />} />
                    <Route path="/useHover" element={<UseHover />} />
                    <Route path="/usePrevious" element={<UsePrevious />} />
                    <Route path="/useOnScreen" element={<UseOnScreen />} />
                    <Route path="/useAnimation" element={<UseAnimation />} />
                    <Route path="/useDebounce" element={<UseDebounce />} />
                    <Route path="/useThrottle" element={<UseThrottle />} />
                    <Route path="/useKeyPress" element={<UseKeyPress />} />
                    <Route path="/useScript" element={<UseScript />} />
                    <Route path="/useEventListener" element={<UseEventListener />} />
                    <Route path="/useAsync" element={<UseAsync />} />
                    <Route path="/useIntersectionObserver" element={<UseIntersectionObserver />} />
                    <Route path="/useSsr" element={<UseSsr />} />
                    <Route path="/useInput" element={<UseInput />} />
                    <Route path="/useCookie" element={<UseCookie />} />
                    <Route path="/useFetch" element={<UseFetch />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
