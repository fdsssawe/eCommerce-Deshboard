import prismadb from "@/lib/prismadb";

interface DashboardLayout{
    params : {storeId : string}
}

const Dashboard : React.FC<DashboardLayout> = async ({params}) => {
    const store = await prismadb.store.findFirst({
        where:{
            id: params.storeId
        }
    })
    return (
        <div>
            Current store : {store?.name}
        </div>
    )
};

export default Dashboard