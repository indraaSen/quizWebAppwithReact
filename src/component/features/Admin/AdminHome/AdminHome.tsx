import image from '../../../Image/home.jpg'

const AdminHome = () =>{
    return (
        <>
        <div>
            <h1 style={{display:"flex", justifyContent:"center", fontSize:"40px", textDecoration:"underline"}}><b>Welcome</b></h1>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <img src={image} alt="" />
        </div>
        <div>
            <h1 style={{display:"flex", justifyContent:"center", fontSize:"40px"}}><b>This is Admin's Home</b></h1>
        </div>
        </>
    )
};

export default AdminHome;