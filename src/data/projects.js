import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Registration Application',
        description: 'A Simple Registration React App that I built.',
        link: 'https://github.com/vifar/registration',
        image: project1
    },
    {
        id: 2,
        title: 'API Project',
        description: 'An application which get and posts to REST APIs.',
        link: 'https://github.com/vifar/fetch-dataset-springboot',
        image: project2
    },
    {
        id: 3,
        title: 'Finger Print Matcher',
        description: 'A Java App which matches fingerprints against one another using SourceAFIS.',
        link: 'https://github.com/vifar/fingerprintMatcher',
        image: project3
    }
]

export default PROJECTS;