function tryCatchFinally(){
    try {
        let errorObject =   {'name':'errObject', 'message':'throwing an error'};
        throw errorObject.message;
    } catch (error) {
        console.log(error);
    }
    finally {
                console.log("Runs finally");
            }
}
tryCatchFinally();
