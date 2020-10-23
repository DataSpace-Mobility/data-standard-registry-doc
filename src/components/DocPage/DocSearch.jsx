import React, {useState} from 'react'; 
import {Tree beard} from 'react-treebeard';
import TextField from '@material-ui/core/TextField';
import {withStyles, makeStyles} from '@material-ui/core/styles';

import Logo from './logo_white.svg'

import './DocSearch.scss';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));




const dataSample = {
    name: 'root',
    toggled: false,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};

function DocSearch() {
    
    const [data, setData] = useState(dataSample);
    const [cursor, setCursor] = useState(false);

    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(node);
        setData(Object.assign({}, data))
    }

    const classes = useStyles();

    return (
        <section className="DocSearch">
            <div className="logo-div">
                <img src={Logo} alt="Logo"/>
            </div>
            {/* <TextField
                label="Search"
                id="outlined-start-adornment"
                className="doc-search"
                variant="outlined"
                size="small"
                style={{
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    color: "#fff"
                }}
                InputLabelProps={{ style: 
                    { 
                        fontSize: "1em",
                        color: "#fff"
                    } 
                }}
            /> */}
            <CssTextField
                className='{classes.margin} doc-search'
                label="Search"
                variant="outlined"
                id="custom-css-outlined-input"
                size="small"
                style={{
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    color: "#fff"
                }}
                InputLabelProps={{ style: 
                    { 
                        fontSize: "1em",
                        color: "#fff"
                    } 
                }}
                />

            <Treebeard data={data} onToggle={onToggle}/>
        </section>
    )
}

export default DocSearch;