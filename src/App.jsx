import { useState } from 'react';
import VinylHeader from "./components/VinylHeader";
import VinylList from "./components/VinylList";
import VinylFooter from "./components/VinylFooter";

function App() {
    return (
        <>
            <VinylHeader/>
            <VinylList/>
            <VinylFooter/>
        </>
    )
}
export default App