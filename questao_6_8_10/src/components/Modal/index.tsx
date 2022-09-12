import { createPortal } from "react-dom";
import './style.css';

interface Props {
    title: string;
    text: string;
    actions: React.ReactNode;
}

const Modal = ({
    title,
    text,
    actions
}: Props) => {
    return createPortal(
        <main className="modal-overlay">
            <section className="modal-container">
                <h3 className="modal-title">{title}</h3>
                { text && <p className="modal-text">{text}</p>}
                <div className="modal-actions">
                    { actions }
                </div>
            </section>
        </main>,
        document.body
    );
}

export { Modal }