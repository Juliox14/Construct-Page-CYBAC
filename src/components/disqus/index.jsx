import { DiscussionEmbed } from 'disqus-react';
import classes from './index.module.scss';

function DisqusForm() {
    const disqusShortname = 'Oxybuild';

    const disqusConfig = {
        url: 'https://oxybuild.disqus.com/',
        identifier: '123',
        title: 'oxybuild-post',
    };
    return (
        <div className={classes.area}>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );
}

export default DisqusForm;
