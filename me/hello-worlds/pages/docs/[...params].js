import { useRouter } from "next/router";

function Doc(){
    const router = useRouter()
    const { params = [] } = router.query;
    console.log( params[0]
         )
    if(params.length === 2){
        return (
            <h1> Views docs for feature { params[0] } and concept {params[1]}</h1>
        )
    }else if(params.length === 1){
        return <h1 style={{color: 'red'}}>Viewing docs for feature { params[0] } </h1>
    }
    return <h1>Docs Home pages</h1>
}
export default Doc;