import { Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <div>
            <div className='text-center'>75%</div>
            <Progress value={75} />
        </div>
    );
}

export default HomePage;