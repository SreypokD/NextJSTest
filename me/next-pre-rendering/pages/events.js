

function EventList({ eventList }){
    return (
        <>
            <h1>
                List of events
            </h1>
            {
                eventList.map((event)=>{
                    return (
                        <div key={event.id}> 
                            <h4>
                                {event.id}/. Student name is: {event.name} and email is : <span style={{color: 'blue'}}>{event.email}</span>
                            </h4>
                        </div>
                    )
                })
            }
        </>
    )
}
export default EventList;
export async function getServerSideProps(){
    const response = await fetch(`http://localhost:4000/events`)
    const data = await response.json();
    return{
        props:{
            eventList: data,
        }
    }
}