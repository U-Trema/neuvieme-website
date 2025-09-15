import {NextPage} from "next";
import styles from '../../components/assiettes.module.css'
import {combineClasses} from "../../libs/utils/combineClasses";

const a = ['1', '2', '3', '4', '5', '6', '7'];
const logo_un = <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="209" height="256" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
const logo_deux = <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="256" height="260" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260"><path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"/></svg>
// const logo_trois = <svg xmlns="http://www.w3.org/2000/svg" width="256" height="257" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257"><path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"/></svg>
const logo_trois = <video src='/intro_accueil.mp4' autoPlay muted />
const logo_quatre = <svg xmlns="http://www.w3.org/2000/svg" style={{ flex: 'none', lineHeight: 1 }} viewBox="0 0 24 24"><path fill="#4D6BFE" d="M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 0 1-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 0 0-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 0 1-.465.137 9.597 9.597 0 0 0-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 0 0 1.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 0 1 1.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 0 1 .415-.287.302.302 0 0 1 .2.288.306.306 0 0 1-.31.307.303.303 0 0 1-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 0 1-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 0 1 .016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 0 1-.254-.078.253.253 0 0 1-.114-.358c.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z"/></svg>
const logo_cinq = <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 233"><path d="M186.18182 0h46.54545v46.54545h-46.54545z"/><path fill="#F7D046" d="M209.45454 0h46.54545v46.54545h-46.54545z"/><path d="M0 0h46.54545v46.54545H0zM0 46.54545h46.54545V93.0909H0zM0 93.09091h46.54545v46.54545H0zM0 139.63636h46.54545v46.54545H0zM0 186.18182h46.54545v46.54545H0z"/><path fill="#F7D046" d="M23.27273 0h46.54545v46.54545H23.27273z"/><path fill="#F2A73B" d="M209.45454 46.54545h46.54545V93.0909h-46.54545zM23.27273 46.54545h46.54545V93.0909H23.27273z"/><path d="M139.63636 46.54545h46.54545V93.0909h-46.54545z"/><path fill="#F2A73B" d="M162.90909 46.54545h46.54545V93.0909h-46.54545zM69.81818 46.54545h46.54545V93.0909H69.81818z"/><path fill="#EE792F" d="M116.36364 93.09091h46.54545v46.54545h-46.54545zM162.90909 93.09091h46.54545v46.54545h-46.54545zM69.81818 93.09091h46.54545v46.54545H69.81818z"/><path d="M93.09091 139.63636h46.54545v46.54545H93.09091z"/><path fill="#EB5829" d="M116.36364 139.63636h46.54545v46.54545h-46.54545z"/><path fill="#EE792F" d="M209.45454 93.09091h46.54545v46.54545h-46.54545zM23.27273 93.09091h46.54545v46.54545H23.27273z"/><path d="M186.18182 139.63636h46.54545v46.54545h-46.54545z"/><path fill="#EB5829" d="M209.45454 139.63636h46.54545v46.54545h-46.54545z"/><path d="M186.18182 186.18182h46.54545v46.54545h-46.54545z"/><path fill="#EB5829" d="M23.27273 139.63636h46.54545v46.54545H23.27273z"/><path fill="#EA3326" d="M209.45454 186.18182h46.54545v46.54545h-46.54545zM23.27273 186.18182h46.54545v46.54545H23.27273z"/></svg>
const logo_six = <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="manifest-a" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="10" y="0" width="40" height="60"><path d="M49.6 0H10.4v60h39.2V0Z" fill="#fff"/></mask><g mask="url(#manifest-a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.2 0c-8 .8-8.2 12.6-.4 13.9l.5.1v1.3a103.8 103.8 0 0 0-.2 4.9l-.3.1-.8.6c0 .2 0 .2-.6.2-.8 0-1.3.2-1.7.7l-.3.2a176.9 176.9 0 0 1-2.4-3.6l-.3-.5.2-.3C27 13 21.2 6 16.2 9.6c-5 3.7-.5 11.5 5.2 9.1l1 1.3a173.2 173.2 0 0 0 2 2.6c.1.1.1.1-.2.2-.9.3-1.7 1-1.9 1.7v.1a2.7 2.7 0 0 0-2.7 2.6c0 .5 0 .5-.2.6a12.3 12.3 0 0 0-4.6 6.8c0 .3 0 .2-.4.3-.8.1-1.3.5-1.8 1.1-.7 1-.8 1.7-.3 2.7.2.4.2.3 0 .7-3 4.1-2.4 9 1.6 12.9 2.5 2.5 6.2 4 10.2 4.4 1.6.1 1.7.2 2.1.7 2.7 3.4 5 3.4 7.5 0 .4-.5.6-.6 2.2-.7 6-.5 11.1-3.8 13-8.6 1.2-3 .8-5.9-1.2-8.7-.2-.4-.2-.3 0-.7.4-1 .4-1.8-.3-2.7-.5-.6-1-1-1.8-1-.4-.2-.4-.1-.4-.4a12.4 12.4 0 0 0-4.6-6.7c-.2-.2-.2-.2-.2-.7 0-1.4-1.2-2.5-2.7-2.6v-.1c-.2-.7-1-1.4-2-1.7-.3 0-.2 0-.2-.2a32.8 32.8 0 0 1 2-2.6l1-1.3c5.8 2.4 10.3-5.4 5.3-9-5-3.8-11 3.3-6.7 8l.2.2-.4.5a259.4 259.4 0 0 0-2.4 3.6l-.2-.2c-.5-.5-1-.7-1.7-.7L32 21c-.2-.4-.7-.7-1.1-.8-.2 0-.2 0-.2-2.2v-4l.4-.1c8.9-1.5 7-14.7-2-13.9ZM29 1.8c-3 .5-5 3.3-4.5 6l.1.7c1.6 4.7 9.2 4.7 10.8 0l.1-.6c.7-3.5-2.7-6.8-6.5-6.1Zm-10.3 8.6a3.8 3.8 0 0 0-3 4.6l.5 1c1.8 2.4 5 2.2 6.4-.4l.2-.7c.7-2.4-1.4-5-4-4.5Zm21.3 0a3.7 3.7 0 0 0-1.8 6.3c1.6 1.5 4.1 1.2 5.5-.6.3-.3.5-.7.6-1 .7-2.4-1.6-5.2-4.3-4.7ZM29.6 21.3c-1 .2-1.4 1.2-.9 2.5.2.4.2.4.5.4h.5c.3.2.3.2.6 0h.5c.3 0 .3 0 .4-.4.7-1.6 0-2.8-1.6-2.5Zm-2.8 1c-.9.2-1.2 1.3-.6 2.5.2.4.2.4.5.3h.4c.4.1.4.1.5-.1l.4-.4v-.3c-.3-.4-.4-.9-.4-1.6 0-.5-.2-.6-.8-.4Zm5.6.4c0 .7-.1 1.2-.4 1.6-.2.2-.2.2 0 .3l.3.4c.2.2.2.2.6.1h.4c.3.1.2.1.5-.3.6-1.4.2-2.5-1-2.6h-.4v.5Zm-8 1c-1.4.3-1.9 1.9-1 3 .2.3.2.3.4.1.4-.2.8-.2 1.2-.2h.2c0-.4.3-.7.5-1 .2-.2.2-.2 0-.3-.3-.4-.5-1.2-.5-1.7h-.9Zm10.4-.1c0 .5-.3 1.3-.6 1.7-.1.1-.1.1 0 .4.3.2.5.5.6.8 0 .2 0 .2.2.1.4 0 .8 0 1.1.2.3.2.2.2.5 0 .7-1 .5-2.5-.5-3-.4-.2-1.3-.3-1.3-.2Zm-6.2 1.6c-.9.5-1 1.5-.2 2.7.3.4.3.4.4.3.5-.8 1.9-.8 2.4 0 .1.2.7-.7.9-1.3.2-1.1-1-2.3-1.6-1.5l-.3.6c-.1.4-.3.4-.4 0l-.5-.8h-.7Zm-6.7.3c-1.7.2-2 2.6-.4 3.7l1.2.5v-.3c-.2-.6 0-1.4.4-1.9l-.2-.4c-.4-.4-.6-.9-.7-1.4 0-.3 0-.3-.3-.2Zm15.9 0v.3c-.2.5-.4.9-.8 1.3-.2.3-.2.3-.1.4.4.5.6 1.3.4 2v.2l1.2-.5c1.4-1 1.4-3 0-3.6l-.7-.1Zm-11.1.4c-1.1.2-1.3 2-.4 3.1l.2.2h.1c.5-.3 1-.4 1.8-.2l.2-.4a2.6 2.6 0 0 1-1.4-2.4V26a15.9 15.9 0 0 1-.5 0Zm6.3 0c-.2 0-.2 0-.1.3 0 1-.5 1.9-1.4 2.4l.2.4c.8-.2 1.3-.1 1.8.2h.1l.2-.2c.7-.8.7-2.3.1-2.8-.1-.2-.6-.4-.8-.3Zm-8.5 1.4c-1.4.4-1.5 2.2-.2 3.4.9.8 0 .6-1-.2-.2-.3-.2-.3-.4-.2-.9 0-2.2-.7-2.9-1.6-.1-.3-.1-.3-.2-.1a15.9 15.9 0 0 0-3.2 5.7c-.2.7-.2.6 0 .7 4.5.8 7.4 5.5 7.5 11.9 0 1.4 0 1.3.5 1.1.3 0 .4-.2.6-.8 1.1-3 2-4.2 3.7-4.6.3 0 .3 0 .3-.2 0-.3.4-1.2.6-1.3.3-.4.8.3 1 1.3 0 .2 0 .2.3.2 1.6.4 2.5 1.6 3.7 4.6.2.6.3.7.6.8.5.2.4.3.5-1.1 0-6.4 3-11.1 7.4-12 .3 0 .3 0 0-.6-.9-2.6-1.7-4.1-3.1-5.7-.1-.2-.1-.2-.3 0-.7 1-2 1.7-2.8 1.7l-.5.2c-1 .8-1.8 1-1 .2 1-.9 1.2-1.7.8-2.6-.4-.7-1.5-1.1-1.6-.6 0 .9-.4 1.5-1 1.9v.3c.3.5.2 1.2-.3 1.7s-.8.5-.4 0c.5-.5.5-1.2-.1-1.4l-1.4.1c0 .3-.4 1-.6 1.3-.2.2-.3.1-.1-.3.5-1.4 0-2.6-1-2.6s-1.4 1.2-.8 2.6c.1.4 0 .5-.2.3-.2-.3-.5-1-.5-1.3 0-.1-1-.2-1.4 0-.6.1-.6.8-.1 1.4.4.4 0 .4-.4 0-.5-.6-.7-1.3-.4-1.8.2-.2.2-.2 0-.3-.5-.4-.8-1-1-1.9v-.2h-.6Zm-9.6 8.5c-2 .3-1.7 2.6.6 4.4.8.6.8.6 2 1.2 4.4 2.3 5.5 3.7 5.5 6.7 0 .2.2.2.4.1V46c-.2-3.6-1.7-7-3.8-8.6a6.8 6.8 0 0 0-4.7-1.6Zm29.1 0c-3.8.4-6.7 4-7.3 9.1l-.1 3.3c.2.1.4 0 .4-.1 0-3 1.1-4.4 5.5-6.7 1.2-.6 1.2-.6 2-1.2 2.8-2.2 2.5-4.7-.5-4.4Zm-30.6 4.6c-1.6 1.7-2 5.3-1 7.8 1.4 3.6 6.2 6.9 10.4 7.2 1.8.2 2.3.2 2.1-.1a63.6 63.6 0 0 1-2.4-4.4c-.7-1-.7-1.7-.2-2.3.3-.3.1-1.8-.3-2.8-.3-.4-.3-.4-.5-.1-2.5 3.8-7.7.9-7.6-4.3 0-.7 0-.7-.2-1h-.3Zm32.8 0c-.2.3-.2.3-.2 1 .1 5.2-5 8-7.6 4.3-.2-.3-.2-.3-.4.1-.5 1-.7 2.5-.3 2.8.5.6.4 1.3-.2 2.3l-.5 1c-.6 1-1.6 3-2 3.4-.1.3-.2.3 1 .2 2.1-.1 3-.3 4.9-1 6.5-3 9.1-8.9 6-13.7-.4-.6-.4-.5-.7-.3Zm-31.4 1c-.3 1 .3 3 1.4 4.2.3.3.3.3.2 0-.5-1.3-.3-2.8.4-3.3.1 0-.1-.2-1-.7l-.7-.2c-.3-.2-.3-.2-.3 0Zm30.1 0-.6.2c-1 .5-1.3.6-1.1.7.7.5.9 2 .4 3.3-.1.3-.1.3.2 0 1-1.1 1.7-3.2 1.4-4.3h-.3Zm-15.3 2c-1.4.3-2.6 1.7-3.6 4-.4 1.3-.7 1.4-2.3 1.7-1 .1-1.1.4-.4 1.4.5.8 1.2 1.8 1.8 3l2.3 3.7c2.1 2.6 4 2.2 6.2-1.5l1.2-2.2 1.9-3c.7-1 .6-1.3-.4-1.4-1.6-.3-1.9-.4-2.4-1.6-1.1-2.9-2.7-4.4-4.3-4ZM26 49.1c-.4.2-.5.5-.3.8 0 .2.4.4.6.2l.3.1c.6.4.8.3.6-.2-.3-.7-.8-1.1-1.2-.9Zm7.2 0c-.3.2-.8 1-.7 1.2 0 .2.2.2.7 0l.3-.2c.2.2.5 0 .6-.2.3-.5-.3-1-.9-.8Z" fill="#22110C"/><path d="M33 25.9c-.2 0-.2 0-.1.3 0 1-.5 1.9-1.4 2.4l.2.4c.8-.2 1.3-.1 1.8.2h.1l.2-.2c.7-.8.7-2.3.1-2.8-.1-.2-.6-.4-.8-.3Zm4.8-.4v.3c-.2.5-.4.9-.8 1.3-.2.3-.2.3-.1.4.4.5.6 1.3.4 2v.2l1.2-.5c1.4-1 1.4-3 0-3.6l-.7-.1Zm-3-1.9c0 .5-.3 1.3-.6 1.7-.1.1-.1.1 0 .4.3.2.5.5.6.8 0 .2 0 .2.2.1.4 0 .8 0 1.1.2.3.2.2.2.5 0 .7-1 .5-2.5-.5-3-.4-.2-1.3-.3-1.3-.2Zm-2.4-.9c0 .7-.1 1.2-.4 1.6-.2.2-.2.2 0 .3l.3.4c.2.2.2.2.6.1h.4c.3.1.2.1.5-.3.6-1.4.2-2.5-1-2.6h-.4v.5Zm-2.8-1.4c-1 .2-1.4 1.2-.9 2.5.2.4.2.4.5.4h.5c.3.2.3.2.6 0h.5c.3 0 .3 0 .4-.4.7-1.6 0-2.8-1.6-2.5Zm-1 3.9c-.9.5-1 1.5-.2 2.7.3.4.3.4.4.3.5-.8 1.9-.8 2.4 0 .1.2.7-.7.9-1.3.2-1.1-1-2.3-1.6-1.5l-.3.6c-.1.4-.3.4-.4 0l-.5-.8h-.7Zm-1.9.8c-1.1 0-1.3 1.8-.4 3l.2.2h.1c.5-.3 1-.4 1.8-.2l.2-.4a2.6 2.6 0 0 1-1.4-2.4V26a13.7 13.7 0 0 1-.5 0Zm-2.4-2.4a2 2 0 0 0-.9 3.1c.2.3.2.3.4.1.4-.2.8-.2 1.2-.2h.2c0-.4.3-.7.5-1 .2-.2.2-.2 0-.3-.3-.4-.5-1.2-.5-1.7h-.9Zm2.5-1.3c-.9.2-1.2 1.3-.6 2.5.2.4.2.4.5.3h.4c.4.1.4.1.5-.1l.4-.4v-.3c-.3-.4-.4-.9-.4-1.6 0-.5-.2-.6-.8-.4ZM22 25.5c-1.8.2-2 2.6-.5 3.7l1.2.5v-.3c-.2-.6 0-1.4.4-1.9l-.2-.4c-.4-.4-.6-.9-.7-1.4 0-.3 0-.3-.3-.2Z" fill="#2430F0"/><path d="M44 35.8c-3.8.4-6.7 4-7.3 9.1l-.1 3.3c.2.1.4 0 .4-.1 0-3 1.1-4.4 5.5-6.7 1.2-.6 1.2-.6 2-1.2 2.8-2.2 2.5-4.7-.5-4.4Z" fill="#2BE1B7"/><path d="M46.2 40.5c-.2.2-.2.2-.2 1 .1 5-5 8-7.6 4.2-.2-.3-.2-.3-.4.1-.5 1-.6 2.5-.3 2.8.5.6.4 1.3-.2 2.3l-.5 1c-.6 1-1.6 3-2 3.4-.1.3-.2.3 1 .2 2.1-.1 3-.3 4.9-1 6.5-3 9.1-8.9 6-13.7-.4-.6-.4-.5-.7-.3Zm-32.8-.1c-1.6 1.7-2 5.3-1 7.8 1.4 3.6 6.2 6.9 10.4 7.2 1.8.2 2.3.2 2.1-.1a63.6 63.6 0 0 1-2.4-4.4c-.7-1-.7-1.7-.2-2.3.3-.3.1-1.8-.3-2.8-.3-.4-.3-.4-.5-.1-2.5 3.8-7.7.9-7.6-4.3 0-.7 0-.7-.2-1h-.3Z" fill="#2BE1B7"/><path d="M15 35.8c-2.1.3-1.8 2.6.5 4.4.8.6.8.6 2 1.2 4.4 2.3 5.5 3.7 5.5 6.7 0 .2.2.2.4.1V46c-.2-3.6-1.7-7-3.8-8.6a6.8 6.8 0 0 0-4.7-1.6Z" fill="#2BE1B7"/><path d="M24.5 27.3c-1.4.4-1.5 2.2-.2 3.4.9.8 0 .6-1-.2-.2-.3-.2-.3-.4-.2-.9 0-2.2-.7-2.9-1.6-.1-.3-.1-.3-.2-.1a15.9 15.9 0 0 0-3.2 5.7c-.2.7-.2.6 0 .7 4.5.8 7.4 5.5 7.5 11.9 0 1.4 0 1.3.5 1.1.3 0 .4-.2.6-.8 1.1-3 2-4.2 3.7-4.6.3 0 .3 0 .3-.2 0-.3.4-1.2.6-1.3.3-.4.8.3 1 1.3 0 .2 0 .2.3.2 1.6.4 2.5 1.6 3.7 4.6.2.6.3.7.6.8.5.2.4.3.5-1.1 0-6.4 3-11.1 7.4-12 .3 0 .3 0 0-.6-.9-2.6-1.7-4.1-3.1-5.7-.1-.2-.1-.2-.3 0-.7 1-2 1.7-2.8 1.7l-.5.2c-1 .8-1.8 1-1 .2 1-.9 1.2-1.7.8-2.6-.4-.7-1.5-1.1-1.6-.6 0 .9-.4 1.5-1 1.9v.3c.3.5.2 1.2-.3 1.7s-.8.5-.4 0c.5-.5.5-1.2-.1-1.4l-1.4.1c0 .3-.4 1-.6 1.3-.2.2-.3.1-.1-.3.5-1.4 0-2.6-1-2.6s-1.4 1.2-.8 2.6c.1.4 0 .5-.2.3-.2-.3-.5-1-.5-1.3 0-.1-1-.2-1.4 0-.6.1-.6.8-.1 1.4.4.4 0 .4-.4 0-.5-.6-.7-1.3-.4-1.8.2-.2.2-.2 0-.3-.5-.4-.8-1-1-1.9v-.2h-.6Z" fill="#2430F0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29.6 43.4c-1.3.3-2.6 1.7-3.6 4-.4 1.3-.7 1.4-2.3 1.7-1 .1-1.1.4-.4 1.4.5.8 1.2 1.8 1.8 3l2.3 3.7c2.1 2.6 4 2.2 6.2-1.5l1.2-2.2 1.9-3c.7-1 .6-1.3-.4-1.4-1.6-.3-1.9-.4-2.4-1.6-1.1-2.9-2.7-4.4-4.3-4ZM25.8 50c-.2-.3 0-.6.3-.8.4-.2 1 .2 1.2 1 .2.4 0 .5-.6.1h-.3c-.2 0-.5 0-.6-.3Zm6.8.4c-.1-.2.4-1 .7-1.2.6-.3 1.2.3 1 .8-.2.2-.5.4-.7.2l-.3.1c-.5.3-.6.3-.7.1Z" fill="#F2C79C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.8 15c-.4-1.8-1.8-3.1-3.8-2.8-1.6.3-3 1.5-3.3 2.8l.5 1c1.8 2.4 5 2.2 6.4-.4l.2-.7Zm1.8-6.5-.1-.6a6 6 0 0 1 4.7-4.3 5.4 5.4 0 0 1 6.3 4.3l-.1.6c-1.6 4.7-9.2 4.7-10.8 0Z" fill="#2430F0"/><path d="M40 10.4a3.7 3.7 0 0 0-2.9 4.5 4.2 4.2 0 0 1 3.2-2.7c2-.3 3.5 1.1 4 2.8.7-2.3-1.6-5-4.3-4.6ZM24.5 7.9a6 6 0 0 1 4.7-4.3 5.4 5.4 0 0 1 6.3 4.3c.7-3.5-2.7-6.8-6.5-6.1-3 .5-5 3.3-4.5 6ZM19 12.2c2-.3 3.4 1 3.8 2.7.7-2.4-1.4-5-4-4.5a3.8 3.8 0 0 0-3 4.6c.3-1.3 1.6-2.5 3.2-2.8Z" fill="#2430F0"/><path d="M38.2 16.7c1.6 1.5 4.1 1.2 5.5-.6.3-.3.5-.7.6-1-.5-1.8-2-3.2-4-2.9a4.2 4.2 0 0 0-3.2 2.7c.2.7.5 1.3 1.1 1.8Z" fill="#2430F0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3 6a6.3 6.3 0 0 1 4-2.4c2.3-.4 4.4.7 5.5 2.5l.6-.7a5.7 5.7 0 0 0-10.7-.2l.6.8Z" fill="#F2C79C"/><path d="M25.3 6c.8 1 1.9 2 2 2l1.2-1.1L30 5.7c.1 0 .7.5 1.2 1.1l1 1.2c.2 0 1.6-1 2.6-2a5.4 5.4 0 0 0-5.6-2.4 7 7 0 0 0-4 2.4Zm-9.6 9a4.3 4.3 0 0 1 3.3-2.8 3 3 0 0 1 2.8 1l.2-1.6c-.8-1-2-1.4-3.3-1.2a3.8 3.8 0 0 0-3 4.5Z" fill="#2BE1B7"/><path d="M15.7 15c.9.5 2 .7 2.3.5.3-.1.4-.8.4-1.5 0-.6 0-1 .2-1.1l1.2.5c.7.4 1.4.7 1.6.6.1 0 .3-.4.4-.9a3 3 0 0 0-2.8-.9 4.3 4.3 0 0 0-3.3 2.7Z" fill="#2BE1B7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37.4 12.5c0 .4 1.1 2.4 1.4 2.5.2 0 .7-.4 1.2-.7.5-.3.8-.6 1-.6l.4.6c.3.4.6 1 .8 1a8 8 0 0 0 2.2-1c0-2.2-2-4.3-4.4-3.9-1.2.2-2.2 1-2.6 2Z" fill="#2BE1B7"/><path d="m45 41.3-.7.3c-1 .5-1.3.6-1.1.7.7.5.9 2 .4 3.3-.1.3-.1.3.2 0 1-1.1 1.7-3.2 1.4-4.3h-.3Zm-30.2 0c-.3 1.1.3 3.2 1.4 4.3.3.3.3.3.2 0-.5-1.3-.3-2.8.4-3.3.1 0-.1-.2-1-.7l-.7-.2c-.3-.2-.3-.2-.3 0Zm27.9 3.2c0-.2-.1-.3-.3-.3 0 0-.2.1-.2.3l.2.2c.2 0 .3-.1.3-.2Z" fill="#fff"/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M35.2 8.9c-2 2-5.8 3.3-10.1.5C27.2 13 33.5 13 35.2 9ZM22 16.4c-2 .9-4.8 0-6.1-.9l.3.6c1.6 2 4.3 2.1 5.8.3Zm22-.8c-1.1 1-3.5 1.9-6.3.6l.5.5c1.6 1.5 4.1 1.2 5.5-.6.1-.2.3-.3.3-.5Z" fill="#22110C"/><path d="M24.5 7.9a6 6 0 0 1 4.7-4.3 5.4 5.4 0 0 1 6.3 4.3c.7-3.5-2.7-6.8-6.5-6.1-3 .5-5 3.3-4.5 6Z" fill="#2430F0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3 6a6.3 6.3 0 0 1 4-2.4c2.3-.4 4.4.7 5.5 2.5l.6-.7a5.7 5.7 0 0 0-10.7-.2l.6.8Z" fill="#2BE1B7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.4 22c-.3-.6-1-.9-1.8-.7a1 1 0 0 0-1 .8c.3-.3 1-.4 1.4-.4.4 0 1 0 1.4.3Zm-3.9.4c-.4 0-1.2.3-1.5.7 0-.4.4-.7.8-.8.4-.1.6-.1.7.1Zm-2.3 1.3v-.1h-.9c-.6.2-1.1.7-1.3 1.3.5-.6 1.3-1.2 2.2-1.2Zm-4.7 3.5c.2-.7 1-1.4 1.5-1.4h.3a2.6 2.6 0 0 1 0-.2l-.1-.1H22c-1 0-1.5.8-1.5 1.7Zm9.1-1.6c-.3-.3-.9-.4-1.6.2l.6-.6h.7l.3.4Zm2.3.2c-.3-.6-1-1-1.3-.4l-.2.2c.3-.2.8-.4 1.5.2Zm-4.7.3V26a14.1 14.1 0 0 1-.5 0c-.6 0-.9.6-1 1.2.2-.7 1-1 1.5-1Zm7.6 1.3c.2-.4 1.2 0 1.6.7l.2.5c-.3-.7-1.1-1-1.8-1.2Zm-3.2 2.7c0-.1 1-.2 1.4 0 .2 0 .3 0 .3.2-.3-.3-1-.2-1.7-.2ZM29 29c.2-.2.5-.4.9-.4s.6.2.8.4c-.2-.2-.5-.3-.8-.3l-.9.3Zm-2.5 1.4.4-.3 1.4.1c-.8 0-1.5 0-1.8.2ZM25 27.5c-.6.2-1.5.5-1.7 1.3 0-.7.4-1.2 1-1.4h.7v.1Zm9-4.3c-.2-.5-.6-.8-1.3-.9h-.4v.2c.4 0 1.3.3 1.6.7Zm2.8 1.8a1 1 0 0 0-.8-1c-.4-.3-1.3-.4-1.3-.3v.1c.8 0 1.7.6 2.1 1.2Zm2.6 2.3c-.2-.7-1-1.4-1.5-1.4h-.3v-.3l.8.1c.6.3 1 1 1 1.6Zm-5.3-.2c0-.4-.1-.7-.4-.8-.1-.2-.6-.4-.8-.3h.1c-.1 0-.2 0-.2.2.5 0 1.3.2 1.5.9Z" fill="#fff" style={{mixBlendMode: 'hard-light'}} opacity=".2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.8 36.1c-1.3 0-3 .4-4 1a11 11 0 0 0-4.7 6.3c-.1.7-.2.9-.3.8.8-4.7 3.6-8 7.2-8.4.8 0 1.4 0 1.8.3Zm-31.8 0c1.5-.1 3.1.3 4.3 1a11.3 11.3 0 0 1 4.9 7c-.5-2.8-1.8-5.4-3.6-6.7a6.8 6.8 0 0 0-4.7-1.6 2 2 0 0 0-.8.3Zm12.6 10.2a4.6 4.6 0 0 1 3.3-1.4c.8 0 2.4.2 3.6 1.6-1.1-2.2-2.5-3.3-4-3-1 .1-2 1.1-3 2.8Z" fill="#fff" fill-opacity=".4" style={{mixBlendMode: 'hard-light'}}/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="m45.2 42-1.7.6-.3-.3c-.2-.1 0-.2 1-.7.3 0 .6-.2.7-.3h.2l.1.7Zm-30.5 0 1.8.6.3-.3c.1 0-.1-.2-1-.7a19 19 0 0 1-.7-.3h-.3v.6Zm7.5 8.5c0 1.1.3 2.5.5 3v.3c.2.5-1.2 1.3-6.6-1.1 2 1.5 4.4 2.5 6.7 2.7 1.8.2 2.3.2 2.1-.1a63.5 63.5 0 0 1-2.7-4.8Zm21.7 2.2c-5.4 2.4-6.8 1.6-6.7 1.1v-.2c.3-.6.7-2 .6-3.1l-.3.4-.5 1c-.6 1-1.6 3-2 3.4v.2h1c2.1-.1 3-.3 4.9-1l3-1.8Zm-19.1.3c1.2 1.9 1.7 2.6 2.3 3.3 2.4 2.6 4.4 2.2 6.9-1.5a46 46 0 0 0-.4.9c-2.3 3.7-4 4.1-6.2 1.5a24.7 24.7 0 0 1-2.6-4.2Z" fill="#22110C"/><path d="M30 40.1c-.5 0-1 3-1.3 3l-.5.5 1.8-.4 2 .6a3 3 0 0 0-.8-.6c-.2 0-.8-3-1.2-3ZM27 32c-.2 0-1-.6-1-1.5.1-.2.4-.5.4-.1s.5 1 .6 1.2c.2.1.3.3 0 .3Zm-4.6-1.5c-1 0-2.2-1.3-2.9-2.1l.4-.4 1 1.3 2 .6.4-.6.4.7 1 1c.4.6-1 0-1.2-.1l-.6-.4h-.5Zm3.1-1.5c-.4-.5-.2-1.1-.3-1.6l1.1 2v.2c-.2 0-.4-.2-.8-.6Zm3.6 2.6c-.4 0-.7-.9-.7-1.5l.4-.2.2 1c0 .2.5.8.1.7Zm3.8.4c.2 0 1-.6 1-1.5-.1-.2-.3-.5-.3-.1s-.5 1-.7 1.2c-.1.1-.3.3 0 .3Zm4.6-1.5c1 0 2.3-1.3 3-2.1L40 28l-.9 1.3-2 .6-.4-.6-.5.7c-.1.3-.6.6-1 1-.3.6 1 0 1.2-.1.2 0 .5-.3.6-.4h.5ZM34.4 29c.4-.5.3-1.1.3-1.6l-1 2v.2c.1 0 .4-.2.7-.6Zm-3.6 2.6c.4 0 .7-.9.7-1.5l-.3-.2-.2 1c-.1.2-.5.8-.2.7Z" fill="#000" fill-opacity=".2"/><path opacity=".2" d="M25.9 50c-.2 0 .2-.2.1-.5.3-.1.7 0 1 .3.5.3.5 1.2.5 1.6 0 .4-1.5-1.4-1.6-1.4Zm8.1 0c.2 0-.2-.2 0-.5-.3-.1-.8 0-1.1.3-.4.4-.4 1.2-.4 1.6 0 .4 1.5-1.4 1.6-1.4Z" fill="#22110C"/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M18.3 41.3c2.2 1.3 4.2 2.5 4.2 4v.1c-.7-1.4-2.2-2.5-5-4a7.8 7.8 0 0 1-2-1.2c-1.8-1.4-2.4-3-1.6-4-.6 2.2 2 3.7 4.4 5.1Z" fill="#22110C"/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M14 36.2h-.1c-.3 1.1.2 2 1.1 2.8.9.8 2.1 1.6 3.4 2.3 1 .6 2 1.2 2.8 1.9.8.6 1.3 1.3 1.3 2v.2c-.7-1.4-2.2-2.5-5-4a17 17 0 0 1-2-1.2 5 5 0 0 1-1.8-2.2c-.3-.7-.2-1.3.2-1.7Zm-.3 1.8a8.2 8.2 0 0 0 3.7 3.4c2.9 1.5 4.4 2.6 5 4v-.1c0-.8-.4-1.4-1.2-2-.8-.7-1.8-1.4-2.9-2C17.1 40.6 16 40 15 39c-.9-.8-1.4-1.6-1.1-2.7-.4.5-.4 1-.2 1.7Zm28 3.3c-2.2 1.3-4.2 2.5-4.2 4 .7-1.3 2.2-2.4 5-3.9 1.2-.6 1.2-.6 2-1.2 1.8-1.4 2.3-3 1.6-3.8.5 2-2 3.5-4.4 5Z" fill="#22110C"/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M46.2 38c-.2.8-.8 1.5-1.7 2.2a8.3 8.3 0 0 1-2 1.3c-2.8 1.4-4.3 2.5-5 3.8 0-.8.5-1.5 1.3-2.1.7-.7 1.8-1.3 2.8-2a14 14 0 0 0 3.4-2.1c.8-.8 1.3-1.7 1.1-2.7.4.4.4 1 .1 1.7Zm0-1.5c.3.4.3 1 0 1.6a8.2 8.2 0 0 1-3.7 3.4c-2.8 1.3-4.3 2.4-5 3.8 0-.8.5-1.4 1.3-2 .8-.7 1.8-1.4 2.9-2 1.2-.7 2.4-1.4 3.3-2.2.8-.8 1.3-1.7 1.2-2.6Z" fill="#22110C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1 40.8c0 1.7 0 9 8.8 9 0-.5.1-.8.4-1.2.3-.3.1-1.8-.3-2.8l-.3-.3-.2.2c-2.5 3.8-7.7.9-7.6-4.3 0-.7 0-.7-.2-1h-.2l-.4.4Z" fill="#000" fill-opacity=".2" style={{mixBlendMode: 'multiply'}}/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M47 40.9c0 1.9-.3 9-8.9 9H38c0-.5 0-1-.3-1.3-.4-.3-.2-1.8.3-2.8l.2-.3.2.2c2.6 3.8 7.7.9 7.6-4.3v-.8l.2-.1.3-.2.4.5v.1ZM28.5 22.4c0 .4 0 .9.2 1.4.2.4.2.4.5.4h.5c.3.2.3.2.5 0h.6c.2 0 .2 0 .4-.4.3-.5.3-1 .3-1.4-.1.6-.4 1.5-1 1.5a2 2 0 0 1-.5 0h-.6c-.5 0-.8-.9-1-1.5Zm3.4 2c.3-.5.5-1 .5-1.7v-.3a3 3 0 0 1-.4 2.2c-.2-.1-.2-.1 0-.3Zm2.2-.7-.3 1v.2l-.3.3h-.2a1 1 0 0 0-.4 0h-.1l.3-.2.4-.2c.3-.3.5-.7.6-1Zm.7-.1c0 .5-.3 1.3-.6 1.7v.3c.4-.5.8-1.5.6-2Zm2.2 1.6c0 .3-.2 1-.5 1.2-.3.3-.4.3-.6.2h-.5l.7.2.2.1.2-.2c.4-.4.5-1 .5-1.5Zm2.5 1.9a3 3 0 0 1-1 1.9c-.5.5-1 .5-1.1-.2v-.2l-.1.8v.3l1.2-.5c.8-.5 1-1.4 1-2.1Zm-1.8-1.3c0 .5-.3.9-.7 1.3-.2.3-.2.3-.1.4.4-.3.7-1 .8-1.7Zm-3.5 1.6c0 .4-.1.8-.3 1-.3.3-.7.4-1 .4l-.7.1c.5 0 .8 0 1.2.3h.1l.2-.2c.3-.4.5-1 .5-1.6Zm-2.8 1.3c.5-.2 1.3-1 1.3-2 0 .8-.5 1.5-1.3 1.9v.1Zm.7-2c-.2.5-.5 1.2-1 1a3 3 0 0 0-2.2 0c-.5.2-.8-.4-1-.8l.5 1 .3.4v-.1c.6-.8 2-.8 2.5 0 .1.2.7-.6.8-1.3v-.2Zm-6.4.7c0 .5.2 1.1.6 1.6l.1.2h.2c.3-.2.7-.3 1.2-.3-.3 0-.5-.2-.7-.1-.3 0-.8 0-1-.5-.2-.1-.3-.5-.4-1Zm1.5-.8c0 1.1.8 1.9 1.3 2.1v-.1a2.6 2.6 0 0 1-1.3-2Zm-1.5-1c.2-.2.2-.2 0-.3-.3-.4-.5-1.2-.5-1.7-.2.5.2 1.5.5 2Zm-2.7-.4a2 2 0 0 0 .4 1.5l.2.2h.2c.3-.2.5-.3.8-.3H24c-.3.1-.4 0-.7-.2l-.4-1.2Zm3-1.3a2.8 2.8 0 0 0 .3 1l.1.3h.7c0-.1-.1-.2-.3-.2l-.4-.2a3 3 0 0 1-.5-1Zm1.5-1.5v.3c0 .7.2 1.2.5 1.6v.3a3 3 0 0 1-.5-2.2Zm-4.9 6.2v.2c-.1.7-.6.7-1.3.2-.6-.6-.8-1.3-.8-1.8 0 .7.2 1.5 1 2l1.2.5v-.3c-.1-.2-.1-.5 0-.8Zm.4-1c.2-.2.2-.2 0-.5a2.3 2.3 0 0 1-.8-1.5c0 .9.5 1.6.8 2Z" fill="#22110C"/><path d="M42.8 43.8c0-.4.3-.8.8-.8.4 0 .8.4.8.8s-.4.7-.8.7a.8.8 0 0 1-.8-.7Zm-27.2 0c0-.4.3-.8.8-.8.4 0 .7.4.7.8s-.3.7-.7.7a.8.8 0 0 1-.8-.7Zm2.1.7c0-.2-.1-.3-.3-.3 0 0-.2.1-.2.3l.2.2c.2 0 .3-.1.3-.2Z" fill="#fff"/></g></svg>
// const logo_sept = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><mask id="vscode-a" width="100" height="100" x="0" y="0" mask-type="alpha" maskUnits="userSpaceOnUse"><path fill="#fff" fill-rule="evenodd" d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z" clip-rule="evenodd"/></mask><g mask="url(#vscode-a)"><path fill="#0065A9" d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"/><g filter="url(#vscode-b)"><path fill="#007ACC" d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"/></g><g filter="url(#vscode-c)"><path fill="#1F9CF0" d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"/></g><path fill="url(#vscode-d)" fill-rule="evenodd" d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z" clip-rule="evenodd" opacity=".25" style={{mixBlendMode: 'overlay'}}/></g><defs><filter id="vscode-b" width="116.727" height="92.246" x="-8.394" y="15.829" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.167"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter><filter id="vscode-c" width="47.917" height="116.151" x="60.417" y="-8.076" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.167"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter><linearGradient id="vscode-d" x1="49.939" x2="49.939" y1=".258" y2="99.742" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>
const logo_sept = <video src='/video.mp4' autoPlay muted />

const imgs = [logo_un, logo_deux, logo_trois, logo_quatre, logo_cinq, logo_six, logo_sept]
const imgs2 = [logo_cinq, logo_un, logo_sept, logo_quatre, logo_trois, logo_six, logo_deux];
const imgs3 = [logo_six, logo_trois, logo_un, logo_cinq, logo_sept, logo_quatre, logo_deux];
const imgs4 = [logo_deux, logo_cinq, logo_six, logo_un, logo_quatre, logo_trois, logo_sept];
const imgs5 = [logo_sept, logo_deux, logo_quatre, logo_six, logo_un, logo_cinq, logo_trois];
const imgs6 = [logo_quatre, logo_six, logo_deux, logo_sept, logo_cinq, logo_un, logo_trois];
const imgs7 = [logo_trois, logo_sept, logo_cinq, logo_deux, logo_six, logo_un, logo_quatre];


const Super: NextPage = () => {
  return (
    <div className={combineClasses(styles.container, 'js-container')}>
      <div className={combineClasses(styles.grid, 'js-grid')}>
        <div className={combineClasses(styles.column, 'js-column')}>
          {a.map((item, index) => {
            return (
              <div key={index} className={combineClasses(styles.product, 'js-product')}>
                <div data-id={item}>{imgs[index]}</div>
              </div>
            )
          })}
        </div>
        <div className={combineClasses(styles.column, 'js-column')}>
          {a.map((item, index) => {
            return (
              <div key={index} className={combineClasses(styles.product, 'js-product')}>
                <div data-id={item}>{imgs2[index]}</div>
              </div>
            )
          }).reverse()}
        </div>
        <div className={combineClasses(styles.column, 'js-column')}>
          {a.map((item, index) => {
            return (
              <div key={index} className={combineClasses(styles.product, 'js-product')}>
                <div data-id={item}>{imgs3[index]}</div>
              </div>
            )
          }).reverse()}
        </div>
        <div className={combineClasses(styles.column, 'js-column')}>
          {a.map((item, index) => {
            return (
              <div key={index} className={combineClasses(styles.product, 'js-product')}>
                <div data-id={item}>{imgs4[index]}</div>
              </div>
            )
          })}
        </div>
        <div className={combineClasses(styles.column, 'js-column')}>
          {a.map((item, index) => {
            return (
              <div key={index} className={combineClasses(styles.product, 'js-product')}>
                <div data-id={item}>{imgs5[index]}</div>
              </div>
            )
          }).reverse()}
        </div>
        <div className={combineClasses(styles.column, 'js-column')}>
          {a.map((item, index) => {
            return (
              <div key={index} className={combineClasses(styles.product, 'js-product')}>
                <div data-id={item}>{imgs6[index]}</div>
              </div>
            )
          })}
        </div>
        <div className={combineClasses(styles.column, 'js-column')}>
          {a.map((item, index) => {
            return (
              <div key={index} className={combineClasses(styles.product, 'js-product')}>
                <div data-id={item}>{imgs7[index]}</div>
              </div>
            )
          }).reverse()}
        </div>
      </div>

      <div className={combineClasses(styles.details, 'js-details')}>
        <div className={combineClasses(styles.details__title, 'js-details__title')}>
          <p data-title="1" data-text>Lorem ipsum.</p>
          {/*<p data-title="2" data-text>Rustic Urn</p>
          <p data-title="3" data-text>Golden Vessel</p>
          <p data-title="4" data-text>Sunlit Amphora</p>
          <p data-title="5" data-text>Midnight Reliquary</p>
          <p data-title="6" data-text>Amber Ewer</p>
          <p data-title="7" data-text>Sylvan Chalice</p>*/}
        </div>
        <div className={combineClasses(styles.details__body, 'js-details__body')}>
          <div className={combineClasses(styles.details__thumb, 'js-details__thumb')} />
          <div className={combineClasses(styles.details__texts, 'js-details__texts')}>
            <p data-desc="1" data-text>
              {/*<span>$300,00</span>*/}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi debitis delectus
              deleniti dignissimos doloremque eius enim ex itaque magnam maxime molestias, odit, officia
              omnis perspiciatis possimus praesentium ratione recusandae, reiciendis saepe sint vero voluptate.
              {/*<button>Add to cart</button>*/}
            </p>
            {/*<p data-desc="2" data-text>
              <span>$220,00</span>
              With its earthy tones and natural speckled finish, this rustic vase evokes the charm of handcrafted
              pottery. Its organic look and timeless shape give a sense of authenticity, making it an ideal piece to
              display dried flowers or simply as a decorative object that adds warmth and artisanal beauty to your home.
              <button>Add to cart</button>
            </p>
            <p data-desc="3" data-text>
              <span>$240,00</span>
              Bright and cheerful, the yellow vase radiates positivity. Its glossy surface reflects light beautifully,
              creating a lively focal point in any setting. Perfect for fresh blooms or displayed on its own, this vase
              captures the essence of sunshine and joy, effortlessly transforming spaces with a vibrant, uplifting touch
              of color.
              <button>Add to cart</button>
            </p>
            <p data-desc="4" data-text>
              <span>$300,00</span>
              Generous in size and striking in presence, the large yellow vase makes a bold decorative statement. Its
              smooth curves and sunny shade are perfect for standing on the floor or dressing up a wide console. Both
              functional and eye-catching, it brings vitality and a contemporary edge to your interior design.
              <button>Add to cart</button>
            </p>
            <p data-desc="5" data-text>
              <span>$390,00</span>
              Sleek and sophisticated, the black vase embodies timeless elegance. Its deep, rich tone makes it
              versatile, pairing effortlessly with minimalist or luxurious décors. Whether holding fresh greenery or
              standing alone as a sculptural accent, this piece exudes modern refinement and bold simplicity, creating
              contrast and balance within any interior style.
              <button>Add to cart</button>
            </p>
            <p data-desc="6" data-text>
              <span>$340,00</span>
              A playful mix of texture and color, the speckled yellow vase is both lively and unique. Its dotted surface
              creates movement and character, while the bright golden base ensures it remains eye-catching. Perfect for
              adding personality to your shelf or table, it combines artistic charm with a cheerful, inviting presence.
              <button>Add to cart</button>
            </p>
            <p data-desc="7" data-text>
              <span>$240,00</span>
              Crafted from natural wood, this vase celebrates organic beauty and timeless simplicity. The warm tones and
              smooth grain bring an earthy elegance to interiors. Perfect for dried arrangements or as a stand-alone
              piece, it highlights craftsmanship and natural textures, making it a versatile addition to rustic, modern,
              or eclectic décors.
              <button>Add to cart</button>
            </p>*/}
          </div>
        </div>
      </div>

      <div className={combineClasses(styles.cross, 'js-cross')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div style={{ position: 'fixed', bottom: 120, right: 50, zIndex: 2000, color: '#fff', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <svg viewBox="0 0 64 64" width={48} height={48} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="32" y1="8" x2="32" y2="56"></line><line x1="56" y1="32" x2="8" y2="32"></line><polyline points="40 16 32 8 24 16"></polyline><polyline points="24 48 32 56 40 48"></polyline><polyline points="48 40 56 32 48 24"></polyline><polyline points="16 24 8 32 16 40"></polyline></g></svg>
        <p style={{ fontSize: 14, width: 150, flexShrink: 0, marginBottom: 0, color: '#fff' }}>glisser pour explorer</p>
      </div>
    </div>
  )
}

export default Super;

/*
import { useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";
import gsap from "gsap";
import { Assiettes } from "../../components/Assiettes";

const Super = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(0);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  useGSAP(() => {
    if (ref.current) {
      // Draggable.create('.containerr', {
      // bounds: {top: 50, left: 100, width: 100, height: 100},
      Draggable.create('.dragg', {
        bounds: '.containerr',
        inertia: true,
        edgeResistance: 0.8,
        dragClickables: false
      })
    }
  });

  const plus = (val: number) => {
    if (ref?.current) {
      setZoom(zoom + val)
      ref.current.style.transform = `perspective(50px) translate3d(0px, 0px, ${zoom}px)`
    }
  }

  const moins = (val: number) => {
    if (ref?.current) {
      setZoom(zoom - val)
      ref.current.style.transform = `perspective(50px) translate3d(0px, 0px, -${zoom}px)`
    }
  }

  console.log('zoom', zoom)
  return (
    <div id='ab' className='ppp' style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: 'orange' }}>
      <div className='containerr' style={{ width: '100%', height: '100%' }}>
        <div
          className='dragg'
          ref={ref}
          style={{
            background: 'violet',
            transition: '.3s ease-in',
            // width: '100%',
            width: 'calc(150vw + 30vw)',
            height: '160vh',
            transform: `perspective(50px) translate3d(0px, 0px, ${zoom}px)`,
        }}
        >
          <div style={{ paddingTop: '0px' }} />
          <Assiettes />
          {/!*<div style={{ paddingTop: '300px' }} />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <hr/><hr/><hr/><hr/>
          <button onClick={() => plus(5)}>click</button>
          <div style={{ marginTop: '300px' }} />

          <div data-clickable="true" style={{ marginLeft: '250px' }} onClick={() => moins(5)}>moins</div>
          <div data-clickable="true" style={{ marginLeft: '250px' }} onClick={() => plus(5)}>plus</div>
          <div style={{ position: 'absolute', top: '50%', left: '50%' }}>{JSON.stringify(zoom)}</div>*!/}
        </div>
      </div>
    </div>
  )
}

export default Super
*/
