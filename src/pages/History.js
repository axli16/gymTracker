import './style.css'


export default function History({isOpen, titleName, content, setSidebarContent}){

    const writeDate=(date) =>{
        return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    const deleteSideBarContent = (con) => {
        // Filter out the item to be deleted
        const updatedSidebarContent = content.filter(item => item !== con);
        
        // Update the sidebarContent state
        setSidebarContent(updatedSidebarContent);
    };
    return(
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <h2 className="history-title">{titleName}</h2>
                <div className="history-bar-container">
                {content
                    .filter(item => item.title === titleName)
                    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
                    .map(con => (
                    
                    <div className="history-bar">
                        <button className='deleteButton1' onClick={()=>deleteSideBarContent(con)}>X</button>
                        <h3>Date:{writeDate(con.date)}</h3>
                        <h3>Set1</h3>
                        <p>Weight:{con.set1.weight} lb <br></br>
                        reps: {con.set1.reps}
                        </p>
                        <h3>Set2</h3>
                        <p>Weight:{con.set2.weight} lb <br></br>
                        reps: {con.set2.reps}
                        </p>
                        <h3>Set3</h3>
                        <p>Weight:{con.set3.weight} lb <br></br>
                        reps: {con.set3.reps}
                        </p>
                        <p>Notes:{con.notes}</p>
                    </div>
                ))}
                </div> 
            </div>
        </>
    )
}