/**
 * Thresholds for displaying toolbox buttons.
 */
export const THRESHOLDS = [
    {
        width: 520,
        order: [ 'microphone', 'camera', 'participants', 'chat', 'toggle-poll', 'desktop', 'recording', 'security' ]
    },
    {
        width: 470,
        order: [ 'microphone', 'camera', 'participants', 'chat', 'toggle-poll', 'recording', 'security' ]
    },
    {
        width: 420,
        order: [ 'microphone', 'camera', 'participants', 'chat', 'recording', 'security' ]
    },
    {
        width: 370,
        order: [ 'microphone', 'camera', 'chat', 'recording' ]
    },
    {
        width: 225,
        order: [ 'microphone', 'camera', 'chat' ]
    },
    {
        width: 200,
        order: [ 'microphone', 'camera' ]
    }
];

export const NOT_APPLICABLE = 'N/A';

export const TOOLBAR_TIMEOUT = 4000;

export const DRAWER_MAX_HEIGHT = '80vh - 64px';

export const NOTIFY_CLICK_MODE = {
    ONLY_NOTIFY: 'ONLY_NOTIFY',
    PREVENT_AND_NOTIFY: 'PREVENT_AND_NOTIFY'
};
