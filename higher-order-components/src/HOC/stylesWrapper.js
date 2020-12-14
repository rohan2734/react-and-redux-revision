import React from "react";
import styles from "../styles/commonStyles";
import commonStyles from "../styles/commonStyles";

const translateProps = (props) => {
    let _styles = {...commonStyles.default}
    if(props.disable){
        _styles = {..._styles,...commonStyles.disable}
    }

    const newProps = {
        ...props,
        styles: _styles
    }
    return newProps;
}

export default (WrappedComponent) => {
     return function wrappedRender(args){
        return WrappedComponent(translateProps(args));
     }

}