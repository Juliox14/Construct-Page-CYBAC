import Component from '..';

export default function Footer() {
    const componentsInThePage = [
        {
            title: 'Footer',
            description: 'Footer principal',
            link: '/admin/footer/edit',
            id: 'frame1',
            url: '/images/admin/footer/index.png',
        },
    ];
    return (
        <Component componentsInThePage={componentsInThePage} />
    );
};
