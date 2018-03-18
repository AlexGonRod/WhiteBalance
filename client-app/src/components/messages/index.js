import React from 'react'

class Modal extends Component {

render() {
    return (

    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalYT">Launch modal</button>


    <div className="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">


            <div className="modal-content">


                <div className="modal-body mb-0 p-0">

                    <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U" allowfullscreen></iframe>
                    </div>

                </div>


                <div className="modal-footer justify-content-center flex-column flex-md-row">
                    <span className="mr-4">Spread the word!</span>
                    <div>

                    </div>
                    <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>


                </div>

            </div>


        </div>
    </div>
    )
}       
}

export default Modal