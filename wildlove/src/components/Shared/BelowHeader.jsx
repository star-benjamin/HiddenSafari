
function BelowHeader({Header, Paragraph}){
    return(
        <div className="pl-4 bg-orange-600">
            <h1 className="text-white font-bold text-2xl">{Header}</h1>
            <p className="text-white p-2 pb-6">{Paragraph}</p>
        </div>
    );
}
export default BelowHeader