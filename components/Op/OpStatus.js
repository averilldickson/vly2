import { OpportunityStatus } from '../../server/api/opportunity/opportunity.constants'
import { FormattedMessage, useIntl, defineMessages } from 'react-intl'
import { Stamp } from '../../components/VTheme/Stamp'
const { DRAFT, ACTIVE, COMPLETED, CANCELLED } = OpportunityStatus
export const OpportunityStatusMessages = defineMessages({
  [DRAFT]: {
    id: 'OpportunityStatus.draft',
    defaultMessage: 'Draft',
    description: 'When an opportunity is being drafted'
  },
  [ACTIVE]: {
    id: 'OpportunityStatus.active',
    defaultMessage: 'Active',
    description: 'When an opportunity has been published'
  },
  [COMPLETED]: {
    id: 'OpportunityStatus.completed',
    defaultMessage: 'Completed',
    description: 'When an opportunity has been completed'
  },
  [CANCELLED]: {
    id: 'cancelled',
    defaultMessage: 'Cancelled',
    description: 'When an opportunity has been cancelled'
  }
})

/** Converts an opportunity status to a translated display string */
export const OpStatus = ({ status }) => {
  if (!status || ![DRAFT, ACTIVE, COMPLETED, CANCELLED].includes(status)) return null
  return (<FormattedMessage {...OpportunityStatusMessages[status]} />)
}

/** Converts an opportunity status to a Stamp - except for Active */
export const OpStatusStamp = ({ status }) => {
  if (!status) return null
  const intl = useIntl()
  return status !== ACTIVE
    ? (
      <Stamp>
        {intl.formatMessage(OpportunityStatusMessages[status])}
      </Stamp>)
    : null
}
