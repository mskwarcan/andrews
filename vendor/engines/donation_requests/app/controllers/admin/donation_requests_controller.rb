class Admin::DonationRequestsController < Admin::BaseController

  crudify :donation_request,
          :title_attribute => 'event_region'


end
