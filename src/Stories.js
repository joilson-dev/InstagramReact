import Story from './Story';

const storiesData = [
    { src: 'assets/img/9gag.svg', usuario: '9gag' },
    { src: 'assets/img/meowed.svg', usuario: 'meowed' },
    { src: 'assets/img/barked.svg', usuario: 'barked' },
    { src: 'assets/img/nathanwpylestrangeplanet.svg', usuario: 'nathanwpylestrangeplanet' },
    { src: 'assets/img/wawawicomics.svg', usuario: 'wawawicomics' },
    { src: 'assets/img/respondeai.svg', usuario: 'respondeai' },
    { src: 'assets/img/filomoderna.svg', usuario: 'filomoderna' },
    { src: 'assets/img/memeriagourmet.svg', usuario: 'memeriagourmet' },
];

export default function Stories() {
    return (
        <>
            <div className="stories">
                {storiesData.map((story, index) => (
                    <Story key={index} src={story.src} usuario={story.usuario} />
                ))}
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle" role="img" className="md hydrated" aria-label="chevron forward circle"></ion-icon>
                </div>
            </div>
        </>
    )

}