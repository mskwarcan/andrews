class DonationRequestsController < ApplicationController

  before_filter :find_all_donation_requests
  before_filter :find_page

  def index
    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @donation_request in the line below:
    present(@page)
    @donation_requests = DonationRequest.new
    end

    def create
      @donation_requests = DonationRequest.new(params[:donation_requests])

      respond_to do |format|
           if @donation_requests.save
             format.html { redirect_to(:action => "index", :notice => 'Your donation request was successfully entered.') }
             format.xml  { render :xml => @donation_requests, :status => :created, :location => @donation_requests }
           else
             format.html { render :action => "new" }
             format.xml  { render :xml => @donation_requests.errors, :status => :unprocessable_entity }
           end
         en

protected

  def find_all_donation_requests
    @donation_requests = DonationRequest.find(:all, :order => "position ASC")
  end

  def find_page
    @page = Page.find_by_link_url("/donation_requests")
  end

end
