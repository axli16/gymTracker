

export default function History({isOpen, content}){
    return(
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            
            {content && (
                <div className="history-bar">
                    <h2 className="history-title">{content.title}</h2>        
                    <p>asdfasdfasdf</p>
                </div>
            )}
              
            </div>
        </>
    )
}