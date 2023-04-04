import React, { Fragment, ReactElement, ReactNode } from "react";
import './dialog.scss';
import ReactDOM from "react-dom";
import {scopedClassMaker} from "../helpers/classmaker";

interface Props {
    children?: React.ReactNode;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
    visible: boolean;
}

const scopedClass = scopedClassMaker('random-react-dialog');
const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    }
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    }
    const result =  props.visible &&
        <Fragment>
            <div className={scopedClass('mask')} onClick={onClickMask}>
            </div>
            <div className={scopedClass('')} onClick={onClickClose}>
                <div className={scopedClass('close')}>
                </div>
                <header className={scopedClass('header')}>
                    提示
                </header>
                <main className={scopedClass('main')}>
                    {props.children}
                </main>
                <footer className={scopedClass('footer')}>
                    {props.buttons && props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index})
                    )}
                </footer>
            </div>
        </Fragment>
        return (
            ReactDOM.createPortal(result, document.body)
        )
    }
    Dialog.defaultProps = {
        closeOnClickMask: false
      };
      const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
        const close = () => {
          ReactDOM.render(React.cloneElement(component, {visible: false}), div);
          ReactDOM.unmountComponentAtNode(div);
          div.remove();
        };
        const component =
          <Dialog
            visible={true}
            buttons={buttons}
            onClose={() => {
              close();
              afterClose && afterClose();
            }}>
            {content}
          </Dialog>;
        const div = document.createElement('div');
        document.body.append(div);
        ReactDOM.render(component, div);
        return close;
      };
      const alert = (content: string) => {
        const button = <button onClick={() => close()}>OK</button>;
        const close = modal(content, [button]);
      };
      const confirm = (content: string, yes?: () => void, no?: () => void) => {
        const onYes = () => {
          close();
          yes && yes();
        };
        const onNo = () => {
          close();
          no && no();
        };
        const buttons = [
          <button onClick={onYes}>yes</button>,
          <button onClick={onNo}>no</button>
        ];
        const close = modal(content, buttons);
      };
export {alert, confirm, modal};
export default Dialog;