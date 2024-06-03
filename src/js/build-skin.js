/*
Used to build the dist/skin.min.js file for use via CDN.
 */

// Modules

import * as App from "./modules/App";
import * as Form from "./modules/Form";
import * as Modal from "./modules/Modal";
import * as Toast from "./modules/Toast";
import * as Visibility from "./modules/Visibility";

// Components

import {SkinAlert} from "./components/skin-alert";
import {SkinBadge} from "./components/skin-badge";
import {SkinIcon} from "./components/skin-icon";
import {SkinLine} from "./components/skin-line";
import {SkinToast} from "./components/skin-toast";

export {App, Form, Modal, Toast, Visibility, SkinAlert, SkinBadge, SkinIcon, SkinLine, SkinToast};

window.Skin = {
    App,
    Form,
    Modal,
    Toast,
    Visibility
}