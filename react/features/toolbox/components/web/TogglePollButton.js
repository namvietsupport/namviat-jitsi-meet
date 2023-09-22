// @flow

import { translate } from '../../../base/i18n';
import { IconPoll } from '../../../base/icons';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';

/**
 * The type of the React {@code Component} props of
 * {@link TogglePollButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * Whether or not audio only mode is currently enabled.
     */
    _audioOnly: boolean,

    /**
     * The currently configured maximum quality resolution to be received from
     * and sent to remote participants.
     */
    _videoQuality: number,

    /**
     * Invoked to obtain translated strings.
     */
    t: Function
};

/**
 * React {@code Component} responsible for displaying a button in the overflow
 * menu of the toolbar, including an icon showing the currently selected
 * max receive quality.
 *
 * @augments Component
 */
class TogglePollButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.callQuality';
    label = 'Toggle Poll';
    tooltip = 'Toggle Poll';
    icon = IconPoll;
}

export default translate(TogglePollButton);
