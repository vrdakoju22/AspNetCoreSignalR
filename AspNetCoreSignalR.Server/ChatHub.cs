using Microsoft.AspNetCore.SignalR;

namespace AspNetCoreSignalR.Server
{
	public class ChatHub : Hub
	{
		public void SendToAll(ChatModel model)
		{
			Clients.All.SendAsync(nameof(SendToAll), model);
		}
	}
}
