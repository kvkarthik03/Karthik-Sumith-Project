import React from "react";
function Success({message}){
    return(
        <div>
            <div class="alert alert-success col-md-7" role="alert">
                {message}
            </div>
        </div>
    );
}
export default Success
