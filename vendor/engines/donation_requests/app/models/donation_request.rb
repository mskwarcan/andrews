class DonationRequest < ActiveRecord::Base

  acts_as_indexed :fields => [:event_region, :event_name, :event_location, :event_address, :expected_attendence, :event_contact_name, :event_contact_number, :event_contact_email, :event_concessionaire, :event_concessionaire_phone, :charity_501c3, :wine_spirits_served, :additional_comments]
  
  validates_presence_of :event_name
  validates_presence_of :event_location
  validates_presence_of :event_address
  validates_presence_of :expected_attendence
  validates_presence_of :event_contact_name
  validates_presence_of :event_contact_number
  validates_presence_of :event_concessionaire
  validates_presence_of :event_concessionaire_phone
  validates_presence_of :charity_501c3
  
  validates_presence_of :event_region
  validates_presence_of :wine_spirits_served

end
