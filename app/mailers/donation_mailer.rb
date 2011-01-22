class DonationMailer < ActionMailer::Base
  default :from => "DonationRequest@andrewsdistributing.com"
  
  def request_email(donation_request)
    @donation = donation_request
    mail(:to => "mike@balcomagency.com", :subject => "Blueprint for Board Service" )
  end
end