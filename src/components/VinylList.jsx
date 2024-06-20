import VinylCard from "./VinylCard";

export default function VinylList() {
    return (
        <main>
            <section className="max-w-7xl mx auto py-7">
                <div className="flex justifty-normal flex-wrap">
                   <VinylCard/>
                   <VinylCard/>
                   <VinylCard/>
                   <VinylCard/>
                   <VinylCard/>
                </div>     
            </section>
        </main>
    );
}