"use client"

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps{
    entityName : string,
    entityIdName: string,
}

const ApiList:React.FC<ApiListProps> = ({entityIdName , entityName}) => {

    const params = useParams()
    const origin = useOrigin()

    const baseUrl = `${origin}/api/${params.storeId}`
    return ( 
        <>
        <ApiAlert description={`${baseUrl}/${entityName}`} title="GET" variant="public"/>
        <ApiAlert description={`${baseUrl}/${entityName}/{${entityIdName}}`} title="GET" variant="public"/>
        <ApiAlert description={`${baseUrl}/${entityName}`} title="POST" variant="admin"/>
        <ApiAlert description={`${baseUrl}/${entityName}/{${entityIdName}}`} title="PATCH" variant="admin"/>
        <ApiAlert description={`${baseUrl}/${entityName}/{${entityIdName}}`} title="DELETE" variant="admin"/>
        </>
     );
}
 
export default ApiList;