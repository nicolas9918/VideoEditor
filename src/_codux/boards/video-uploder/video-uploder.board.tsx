import { createBoard } from '@wixc3/react-board';
import { VideoUploder } from '../../../components/video-uploder/video-uploder';

export default createBoard({
    name: 'VideoUploder',
    Board: () => <VideoUploder />,
    isSnippet: true,
});