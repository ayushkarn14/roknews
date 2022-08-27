import "./App.css";
import ContentPage from "./components/ContentPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ContentPage key="2" category="all_news" />
                            }
                        />
                        <Route
                            path="/india"
                            element={
                                <ContentPage key="3" category="national" />
                            }
                        />
                        <Route
                            path="/business"
                            element={
                                <ContentPage key="4" category="business" />
                            }
                        />
                        <Route
                            path="/sports"
                            element={<ContentPage key="5" category="sports" />}
                        />
                        <Route
                            path="/world"
                            element={<ContentPage key="6" category="world" />}
                        />
                        <Route
                            path="politics"
                            element={
                                <ContentPage key="7" category="politics" />
                            }
                        />
                        <Route
                            path="tech"
                            element={
                                <ContentPage key="8" category="technology" />
                            }
                        />
                        <Route
                            path="/startup"
                            element={<ContentPage key="9" category="startup" />}
                        />
                        <Route
                            path="science"
                            element={
                                <ContentPage key="10" category="science" />
                            }
                        />
                        <Route
                            path="automobile"
                            element={
                                <ContentPage key="11" category="automobile" />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
