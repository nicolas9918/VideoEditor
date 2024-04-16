import classNames from 'classnames';
import styles from './video-uploder.module.scss';

export interface VideoUploderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const VideoUploder = ({ className }: VideoUploderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2 className={styles.h2}>SOLO ARCHIVOS MP4 </h2>
            <div>
                <h1>Sube tu video</h1>
            </div>
            <div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.image}
                />
                <input type="file" />
                <button>Button</button>
            </div>
        </div>
    );
};
