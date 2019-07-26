import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './goods.css'

function getModalStyle() {

        return {
        transform: `translateY(0)`,
        position: 'relative',
        boxSizing: 'border-box',
        margin: '50px 15px',
        padding: '50px 30px 30px 30px',
            overflow: 'auto',
            height: '90vh'
        };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
}));

export default function SimpleModal({props}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {description} = props;
    const desc = description();
       return (
       <div>
           <div  onClick={handleOpen}>
               читать описание
           </div>

           <Modal
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
               open={open}
               onClose={handleClose}
           >
               <div style={modalStyle} className={classes.paper}>
                   <button  className='modal-close' onClick={handleClose}>
                       х
                   </button>
                   <div id="simple-modal-description" className="text-modal">
                       <p className="modal-img"><img  className="modal-img" src={`/img/slider/00${props.id}.png`} alt={props.name}/></p>
                       <h3 className='text-center'>{props.name}</h3>
                       <div>{desc}</div>
                   </div>

               </div>
           </Modal>
       </div>

    );
}