using Microsoft.EntityFrameworkCore.Migrations;

namespace ChatApplication.Migrations
{
    public partial class create7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "active",
                table: "LoginData");

            migrationBuilder.DropColumn(
                name: "recievemsg",
                table: "LoginData");

            migrationBuilder.DropColumn(
                name: "sendmsg",
                table: "LoginData");

            migrationBuilder.CreateTable(
                name: "Connections",
                columns: table => new
                {
                    ConnectionID = table.Column<string>(nullable: false),
                    UserAgent = table.Column<string>(nullable: true),
                    Connected = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Connections", x => x.ConnectionID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Connections");

            migrationBuilder.AddColumn<string>(
                name: "active",
                table: "LoginData",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "recievemsg",
                table: "LoginData",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "sendmsg",
                table: "LoginData",
                nullable: true);
        }
    }
}
