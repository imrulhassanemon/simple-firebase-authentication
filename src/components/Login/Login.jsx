

const Login = () => {

    const handellogginWithGoogle = () =>{
        console.log('Hello google I am comming ')
    }


    return (
        <div style={{'marginTop':'30px'}}>

            <button onClick={handellogginWithGoogle}>Loggin With Google</button>

        </div>
    );
};

export default Login;