class DonationMailer < ActionMailer::Base
  default :from => "DonationRequest@andrewsdistributing.com"
  
  def request_email(donation_request)
    @donation = donation_request
    
    region = Region.first(:conditions => {:region => @donation.region})
    mail(:to => region.email, :subject => "Donation Request Form Entry" )
  end
end