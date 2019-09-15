import { checkUrl, pathOr } from '../utils/GlobalUtils'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const appendRawGitUrl = coder => {
    const imageStatus = checkUrl(coder.image)

    return {
        ...coder,
        image: (imageStatus === 1)
            ? coder.image
            : (imageStatus === 0)
                ? `${process.env.REACT_APP_ROOT_URL}${coder.image}`
                : 'https://picsum.photos/200'
    }
}

export const appendSocialLinks = coder => {
    const github = pathOr('#', 'github', coder)
    const linkedin = pathOr('#', 'linkedin', coder)
    const webpage = pathOr('#', 'webpage', coder)
    const twitter = pathOr('#', 'twitter', coder)

    return {
        ...coder,
        links: Array.from([
            { url: github, icon: faGithub },
            { url: linkedin, icon: faLinkedin },
            { url: webpage, icon: faGlobeAmericas },
            { url: twitter, icon: faTwitter }]
        )
    }
}

export const updateLinks = data =>
    data.map(appendSocialLinks)

export const updateImageUrl = data =>
    data.map(appendRawGitUrl)