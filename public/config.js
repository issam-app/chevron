window.CONFIG = {
    macros: [
        {
            name: 'YouTube',
            url: 'https://www.youtube.com',
            normalisedURL: 'youtube.com',
            commands: {
                go: {
                    template: 'https://youtu.be/{$}',
                    description: 'go to video'
                },
                search: {
                    template: '{@}/results?search_query={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#f30002'
            },
            textColor: '#fff',
        },
        {
            name: 'Twitch',
            url: 'https://www.twitch.tv',
            normalisedURL: 'twitch.tv',
            commands: {
                go: {
                    template: '{@}/{$}',
                    description: 'go to channel'
                },
                search: {
                    template: '{@}/search?term={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#9047FF'
            },
            textColor: '#000',
        },
        {
            name: 'WhatsApp',
            url: 'https://web.whatsapp.com',
            normalisedURL: 'whatsapp.com',
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                angle: 45,
                colors: ['#26d347', '#58f879']
            },
            textColor: '#fff',
        },
        {
            name: 'Reddit',
            url: 'https://reddit.com',
            normalisedURL: 'reddit.com',
            commands: {
                go: {
                    template: '{@}/r/{$}',
                    description: 'go to subreddit'
                },
                search: {
                    template: '{@}/search?q={$}'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#f07e23', '#f74300'],
                stops: [0, 100]
            },
            textColor: '#fff',
        },
        {
            category: 'Programming',
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com',
            normalisedURL: 'github.com',

            commands: {
                go: {
                    template: '{@}/{$}',
                    description: 'go to user'
                },
                search: {
                    template: '{@}/search?q={$}'
                },
                new: {
                    template: '{@}/new',
                    description: 'new repo'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#171515'
            },
            textColor: '#e8e8e8',
        },
        {
            name: 'StackOverflow',
            url: 'https://stackoverflow.com',
            normalisedURL: 'stackoverflow.com',
            commands: {
                search: {
                    template: '{@}/search?q={$}'
                },
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#e87922', '#ffbe25'],
                stops: [0, 100]
            },
            textColor: '#212121',
        },
        {
            category: 'Programming',
            name: 'ChatGPT',
            icon: 'chatGPT',
            url: 'https://chat.openai.com/chat',
            normalisedURL: 'openai.com',

            bgColor: {
                type: 'solid',
                color: '#70a597',
            },
            textColor: '#f7f7f7',
        },
        {
            category: 'Other',
            name: 'Translate',
            icon: 'translate',
            url: 'https://translate.google.com',
            normalisedURL: 'translate.google.com',
            commands: {
                search: {
                    template: '{@}/?text={$}',
                    description: 'translate text'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                angle: 45,
                colors: ['#508bed', '#4654b4']
            },
            textColor: '#fff',
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com',
            normalisedURL: 'instagram.com',
            commands: {
                go: {
                    template: '{@}/{$}',
                    description: 'go to user'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'radial',
                angle: 'circle at 30% 107%',
                colors: ['#fdf497', '#fdf497', '#fd5949', '#d6249f', '#285aeb'],
                stops: [0, 5, 45, 60, 90]
            },
            textColor: '#e8e8e8',
        },
        {
            name: 'Apple Music',
            url: 'https://music.apple.com/fr',
            normalisedURL: 'music.apple.com/fr',
            commands: {
                search: {
                    template: '{@}/search?term={$}'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#FC5871', '#FA213B'],
            },
            textColor: '#FFF',
        },
        {
            name: 'spotify',
            icon: 'spotify',
            url: 'https://open.spotify.com',
            normalisedURL: 'spotify.com',
            commands: {
                search: {
                    template: '{@}/search/{$}'
                },
                go: {
                    template: '{@}/track/{$}',
                    description: 'go to track'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#1ccc5b'
            },
            textColor: '#000',
        },
        {
            category: 'Social',
            name: 'Discord',
            icon: 'discord',

            url: 'https://discord.com/app',
            normalisedURL: 'discord.com',
            bgColor: {
                type: 'solid',
                color: '#5460e6'
            },
            textColor: '#fff',
        },
        {
            category: 'Entertainment',
            name: 'Netflix',
            icon: 'netflix',
            url: 'https://media.netflix.com',
            normalisedURL: 'netflix.com',
            commands: {
                search: {
                    template: '{@}/en/search?&term={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#000'
            },
            textColor: '#F00',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com',
            normalisedURL: 'twitter.com',
            commands: {
                search: {
                    template: '{@}/search?q={$}'
                },
                go: {
                    template: '{@}/{$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#1c99e6'
            },
            textColor: '#e8e8e8',
        },
        {
            name: 'Google Drive',
            url: 'https://drive.google.com',
            normalisedURL: 'drive.google.com',
            bgColor: {
                type: 'gradient',
                angle: 70,
                gradientType: 'linear',
                colors: ['#2684fc', '#00ac47', '#ffba00']
            },
            textColor: '#fff',
        },
        {
            name: 'Amazon',
            url: 'https://www.amazon.fr/',
            normalisedURL: 'amazon.fr',
            commands: {
                search: {
                    template: '{@}/s?k={$}'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#f29100', '#fff'],
                stops: [0, 80]
            },
            textColor: '#000',
        },
        {
            name: 'Wikipedia',
            url: 'https://fr.wikipedia.org',
            normalisedURL: 'fr.wikipedia.org',
            commands: {
                search: {
                    template: '{@}/?search={$}'
                },
                go: {
                    template: '{@}/wiki/{$}'
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#e1e1e3', '#bbb'],
                stops: [60, 100]
            },
            textColor: '#000',
        },
        {
            name: 'DuckDuckGo',
            url: 'https://duckduckgo.com',
            normalisedURL: 'duckduckgo.com',
            commands: {
                search: {
                    template: '{@}/?q={$}'
                }
            },
            bgColor: {
                type: 'solid',
                color: '#e37151'
            },
            textColor: '#e8e8e8'
        },
        {
            name: 'Fotmob',
            url: 'https://www.fotmob.com/fr/',
            normalisedURL: 'www.fotmob.com/fr',
            bgColor: {
                type: 'solid',
                color: '#049554'
            },
            textColor: '#FFF',
        },
        {
            name: 'Codewars',
            url: 'https://www.codewars.com/',
            normalisedURL: 'codewars.com',
            bgColor: {
                type: 'solid',
                color: '#EB4647'
            },
            textColor: '#fff',
        },
        {
            name: 'Geeksforgeeks',
            url: 'https://www.geeksforgeeks.org',
            normalisedURL: 'geeksforgeeks.org',
            commands: {
                search: {
                    template: '{@}/search/{$}'
                },
            },
            bgColor: {
                type: 'solid',
                color: '#2F8D46',
            },
            textColor: '#1F1F1F',
        },
        {
            name: 'Yggtorrent',
            url: 'https://www.ygg.re',
            normalisedURL: 'ygg.re',
            commands: {
                search: {
                    template: '{@}/engine/search?name={$}&do=search',
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#6FE0E3', '#66DEB1'],
            },
            textColor: '#000',
        },
        {
            name: 'Designcode',
            url: 'https://designcode.io',
            normalisedURL: 'designcode.io',
            bgColor: {
                type: 'gradient',
                gradientType: 'radial',
                angle: 'circle at 30% 107%',
                colors: ['#4316DB', '#AA57AB', '#DE7A93'],
                stops: [0, 45, 90],
            },
            textColor: '#FFF',
        },
        {
            name: 'console.dev',
            url: 'https://console.dev',
            normalisedURL: 'console.dev',
            bgColor: {
                type: 'solid',
                color: ['#000'],
            },
            textColor: '#FFF',
        },
        {
            name: 'daily.dev',
            url: 'https://app.daily.dev',
            normalisedURL: 'app.daily.dev',
            commands: {
                search: {
                    template: '{@}/search?q={$}',
                }
            },
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                angle: '45%',
                colors: ['#A05BF6', '#EF62BF'],
            },
            textColor: '#FFF',
        },
        {
            name: 'Plex',
            url: 'https://app.plex.tv/desktop/#!',
            normalisedURL: 'app.plex.tv/desktop/#!',
            commands: {
                search: {
                    template: '{@}/search?pivot=top&query={$}',
                }
            },
            bgColor: {
                type: 'solid',
                color: '#000',
            },
            textColor: '#EBAF00',
        },
        {
            name: 'Dribbble',
            url: 'https://dribbble.com',
            normalisedURL: 'dribbble.com',
            commands: {
                search: {
                    template: '{@}/search/shots/following?q={$}',
                }
            },
            bgColor: {
                type: 'solid',
                color: '#E9528C',
            },
            textColor: '#fff',
        },
        {
            name: 'Linear',
            url: 'https://linear.app',
            normalisedURL: 'linear.app',
            bgColor: {
                type: 'gradient',
                gradientType: 'linear',
                colors: ['#5D64C4', '#343EA1'],
            },
            textColor: '#fff',
        },
        {
            name: 'Onmail',
            url: 'https://mail.onmail.com',
            normalisedURL: 'mail.onmail.com',
            bgColor: {
                type: 'solid',
                color: '#0953F1',
            },
            textColor: '#FFF',
        },
        {
            name: 'Protonmail',
            url: 'https://mail.protonmail.com',
            normalisedURL: 'mail.protonmail.com',
            bgColor: {
                type: 'solid',
                color: '#6A48F7',
            },
            textColor: '#000',
        },
    ],
    commands: [
        {
            type: 'search',
            trigger: '?'
        },
        {
            type: 'go',
            trigger: '/'
        },
        {
            type: 'new',
            trigger: '+',
        }
    ],
    engines: {
        google: {
            name: 'Google',
            bgColor: {
                type: 'solid',
                color: '#aaa'
            },
            textColor: '#fff',
            types: {
                // @ - origin query (what user typed); $ - final query (what is in the query field (selected))
                query: {
                    template: 'https://www.google.com/search?q={$}'
                },
                calculator: {
                    template: 'https://www.google.com/search?q={@}'
                },
                currency: {
                    template: 'https://www.google.com/search?q={@}'
                }
            }
        },
    }
}
